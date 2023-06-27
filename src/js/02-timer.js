import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const choiceDate = document.querySelector('#datetime-picker')
const start = document.querySelector('[data-start]');
const daysTimer = document.querySelector('[data-days]');
const hoursTimer = document.querySelector('[data-hours]');
const minutesTimer = document.querySelector('[data-minutes]');
const secondsTimer = document.querySelector('[data-seconds]')


start.setAttribute('disabled', '');



const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0].getTime() < options.defaultDate.getTime()) {
            Notiflix.Notify.failure("Please choose a date in the future");
        } else {
            start.removeAttribute('disabled')
           
            let ms = selectedDates[0].getTime() - options.defaultDate.getTime();
           
            let timerId = null;
            start.addEventListener('click', () => {
                start.setAttribute('disabled', '');
                
                timerId = setInterval(() => {
                       
                if (ms >= 1000) {
                    ms = ms - 1000;
                    const rezolt = convertMs(ms);
                   
                    daysTimer.textContent = rezolt.days;
                    hoursTimer.textContent = rezolt.hours;
                    minutesTimer.textContent = rezolt.minutes;
                    secondsTimer.textContent = rezolt.seconds;
                } else {
                    clearInterval(timerId);
                               
                            }
                  
                 }, 1000);
              
            })
             
        }
       
  },
};

choiceDate.addEventListener('focus', () => {
    flatpickr(choiceDate, options); 
    
   })

function addLeadingZero(value) {
     return String(value).padStart(2, '0')
   }

function convertMs(ms) {
      
 
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

 
  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
