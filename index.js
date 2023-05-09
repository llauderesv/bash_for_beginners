const helloWorld = (ms = 1500) =>
  new Promise((resolve, reject) => setTimeout(() => resolve('Hello World'), ms));

helloWorld(3000).then(message => console.log(message));

function randomThrow() {
  const rnd = Math.ceil(Math.random() * 100);

  try {
    if (rnd < 50) throw new Error(`Random is less than 50: ${rnd}`);

    return Promise.resolve(`Random value is: ${rnd}`);
  } catch (error) {
    return Promise.reject(error);
  }
}

randomThrow()
  .then(value => console.log(value))
  .catch(err => console.log(err));
