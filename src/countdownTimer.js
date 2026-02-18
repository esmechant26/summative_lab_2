import chalk from 'chalk';
import { showMainMenu } from './gameLogic.js';

function countdownTimer(time, interval) {
  console.log(`You have ${time} minutes to answer all the questions`);
  let i = time;
  const myInterval = setInterval(() => {
    i--;
    if(i > 0)
    {console.log(chalk.bgRedBright(`\nYou have ${i} minute left`))}
    else if (i <= 0){
      clearInterval(myInterval);
      console.log(chalk.bgRedBright("\nYou ran out of time. Returning to main menu."))
      showMainMenu()
    }
  }, interval);

  return myInterval;
}


export default countdownTimer;