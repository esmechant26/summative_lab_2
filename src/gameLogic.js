import { select } from '@inquirer/prompts';
import chalk from 'chalk';
import countdownTimer from './countdownTimer.js';
import { startGame } from './questions.js';
import { questions } from './questions.js';

countdownTimer(2, 30000);

export const gameState = {
    stats: {
        correct: 0,
        incorrect: 0,
    },
    over: false,
}

export async function showMainMenu(gameState) {
  const action = await select({
    message: "Main Menu",
    choices: [
      { name: "Start Game", value: "start" },
      { name: "See Stats", value: "stats" },
      { name: "View Questions", value: "questions"},
      { name: "Reset Game", value: "reset" },
      { name: "Quit", value: "quit" },
    ],
  });

  switch (action) {
    case "start":
      await startGame();
      break;
    case "stats":
      showStats();
      await select({ message: "Press Enter to go back", choices: [{ name: "Back", value: "back" }] });
      showMainMenu();
      break;
    case "questions":
      viewQuestions()
      await select({ message: "Press Enter to go back", choices: [{ name: "Back", value: "back" }] });
      showMainMenu();
      break;
    case "reset":
      resetGame();
      console.log(chalk.bgRedBright("Stats have been reset."));
      showMainMenu();
      break;
    case "quit":
      console.log("Goodbye!");
      process.exit(0);
  }
}

  function viewQuestions(){
    for(const q of questions){
   console.log(q.question)
    }
 
  }
 
  export async function showStats() {
   console.log("Game Stats:");
   console.log(chalk.green(`Correct answers: ${gameState.stats.correct}`));
   console.log(chalk.red(`Incorrect answers: ${gameState.stats.incorrect}`)); 
  }

 export async function resetGame() {
    gameState.stats = { correct: 0, incorrect: 0};
   }

