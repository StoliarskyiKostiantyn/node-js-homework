import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

import { Pool } from 'pg';
import { AppModule } from '../app.module';

describe('AppController', () => {
  let app: INestApplication;
  let pool: Pool;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    pool = new Pool({
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 5412,
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_NAME || 'nest_app',
    });
  });

  afterEach(async () => {
    await app.close();
    await pool.end();
  });

  it('check token and verify that are only token', async () => {
    const res = await request(app.getHttpServer())
      .post('/auth/login')
      .send({
        username: 'janedoe',
        password: 'securepassword',
      })
      .expect(201);
    const token = res.body.access_token;
    console.log(token);

    const tokenCheckRes = await request(app.getHttpServer())
      .get('/users/janedoe')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    const result = await pool.query(
      'SELECT COUNT(*) FROM tokens WHERE user_id = $1',
      [tokenCheckRes.body.id],
    );
    const tokenCount = parseInt(result.rows[0].count, 10);

    expect(tokenCount).toBe(1);
  });
});
