#!/usr/bin/env node

// Imports

import chalk from "chalk";
import inquirer from "inquirer";
import select, { Separator } from "@inquirer/select";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";
import { exec } from "node:child_process";

// Code
// Functions

// Coding

// Configs
// IP
async function ipConfig() {}

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function start() {
  figlet.text("Welcome", { font: "Larry 3D 2" }, (error, result) => {
    console.log(chalk.red(result));
  });
  setTimeout(() => {
    figlet.text("to", { font: "Larry 3D 2" }, (error, result) => {
      console.log(chalk.red(result));
    });
    setTimeout(() => {
      figlet.text("ltm-cli", { font: "Larry 3D 2" }, (error, result) => {
        console.log(chalk.red(result));
      });
    }, 200);
  }, 200);
}

async function useCasesCategories() {
  const answer = await select({
    message: "How do you want to continue?",
    choices: [
      {
        name: chalk.red("Coding"),
        value: "coding",
      },
      {
        name: chalk.blue("Configs"),
        value: "configs",
      },
      {
        name: "Idling",
        value: "idle",
      },
    ],
  });
  if (answer === "coding") {
    console.log("lol");
  } else if (answer === "configs") {
    let configAnswers = await select({
      message: "Choose a topic: ",
      choices: [
        {
          name: chalk.yellow("IP"),
          value: "ip",
        },
      ],
    });
    exec("npm -v", (error, output) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log(output);
    });
  } else if (answer === "idle") {
    console.log(`
    
    
    
    
    
    `);
    figlet.text("ltm-cli", { font: "3D-ASCII" }, (error, result) => {
      chalkAnimation.rainbow(result);
    });
  }
}
await start();
await setTimeout(() => {
  useCasesCategories();
}, 1000);
