function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

delay(5000).then(() => console.log("Пройшло 5 секунд"));
