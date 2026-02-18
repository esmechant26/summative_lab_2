import { select } from '@inquirer/prompts';
import chalk from 'chalk';
import { gameState } from './gameLogic.js';
import { showMainMenu } from './gameLogic.js';
import { showStats } from './gameLogic.js';

export const questions = [
{
    question: "Which mammal is known to have the most powerful bite force?",
    choices: ["Hippopotamus", "Giraffe", "Alligator"],
    correctAnswer: "Hippopotamus"
    },
    {
   question: "What type of animal is a tarantula?",
   choices: ["Mouse", "Spider", "Ant"],
   correctAnswer: "Spider"
    },
    {
   question: "What is the largest mammal?",
   choices: ["Moose", "Rhinocerous", "Blue whale?"],
   correctAnswer: "Blue whale"
    }
];

export async function startGame() {
 for(const q of questions){
    const userChoice = await select({
        message: q.question,
        choices: q.choices.map(choice => ({
            name: choice,
            value: choice
        }))
    })
    if (userChoice === q.correctAnswer){
        console.log(chalk.green("Correct"))
        gameState.stats.correct++
    }
    else{
      console.log(chalk.red("Incorrect"));
      console.log(chalk.green(`The correct answer is: ${q.correctAnswer}`));
      gameState.stats.incorrect++;
    }
 }
  
  console.log("Game Over.")
  showStats()
  console.log("Returning to main menu") 
  showMainMenu();
  }
