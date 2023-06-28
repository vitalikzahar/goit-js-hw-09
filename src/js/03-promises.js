import Notiflix from 'notiflix';

const form = document.querySelector('.form')


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve({position, delay})
  } else {
    // Reject
    reject({position, delay})
  }
    }, delay);
    
  })
  
}

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const {
    elements: { delay, step, amount }
  } = event.currentTarget;
let stepTime = Number(delay.value);
  for (let i = 1; i <= amount.value; i++) {
   
    createPromise(i, stepTime).then(({ position, delay }) => {
       Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }).catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
     stepTime += Number(step.value)
  }
 form.reset()
  })
  
