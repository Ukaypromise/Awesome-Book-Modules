import { DateTime } from './luxon.js';

const getTime = () => {
  const dateTime = document.querySelector('.current_time');
  if (!dateTime.innerText) {
    setInterval(() => {
      dateTime.innerText = DateTime.now().toLocaleString(
        DateTime.DATETIME_MED_WITH_SECONDS,
      );
    }, 1000);
  }
};

export default getTime;