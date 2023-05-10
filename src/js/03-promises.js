import Notiflix from 'notiflix';

const refs = {
  body: document.querySelector('body'),
  input: document.querySelector('form'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
}

refs.input.addEventListener('click', onHandSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}

function onHandSubmit(e) {
  e.preventDefault();

  let valueDelay = Number(refs.delay.value);
  let step = Number(refs.step.value);
  let amount = Number(refs.amount.value);

  for (let position = 1; position <= amount; position++) {
    let promiseDelay = valueDelay + step * position;

    createPromise(position, promiseDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}


