import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('[data-start]');
const inputEl = document.querySelector('#datetime-picker');
const daysCounter = document.querySelector('[data-days]');
const hoursCounter = document.querySelector('[data-hours]');
const minutesCounter = document.querySelector('[data-minutes]');
const secondsCounter = document.querySelector('[data-seconds]');

let interval = null;

const options = {
  dateFormat: 'Y-m-d H:i',
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() - Date.now() < 0) {
      startBtn.disabled = true;
      alert('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
    }
  },
};
const calendar = flatpickr(inputEl, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateTime() {
  const selectedDate = new Date(inputEl.value);
  const currentDate = new Date();
  const gap = selectedDate - currentDate;
  const { days, hours, minutes, seconds } = convertMs(gap);
  if (gap < 0) {
    clearInterval(interval);
    inputEl.disabled = false;
    return;
  }
  daysCounter.textContent = addLeadingZero(days);
  hoursCounter.textContent = addLeadingZero(hours);
  minutesCounter.textContent = addLeadingZero(minutes);
  secondsCounter.textContent = addLeadingZero(seconds);
}

startBtn.addEventListener('click', handleStart);
function handleStart() {
  inputEl.disabled = true;
  startBtn.disabled = true;
  interval = setInterval(updateTime, 1000);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
