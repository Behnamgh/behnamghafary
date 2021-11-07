#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

// Questions after the card 
const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            {
                name: `Send me an ${chalk.green.bold("email")}?`,
                value: () => {
                    open("mailto:behnam.ghafary@gmail.com");
                    console.log("\nDone, see you soon.\n");
                }
            },
            {
                name: "Just quit.",
                value: () => {
                    console.log("Good Bye!\n");
                }
            }
        ]
    }
];

// Data for the card
const data = {
    name: chalk.bold.green("        Behnam Ghafary"),

    blog: chalk.gray("https://dev.to/") + chalk.whiteBright("cdthomp1"),
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("behnam_ghafary"),
    github: chalk.gray("https://github.com/") + chalk.green("behnamgh"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("behnamghafary"),
    npx: chalk.red("npx") + " " + chalk.white("behnamghafary"),

    labelWork: chalk.white.bold("       Work:"),
    labelBlog: chalk.white.bold("     Blog:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelWeb: chalk.white.bold("        Web:"),
    labelCard: chalk.white.bold("       Card:")
};

// Build the card
const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        `${data.labelBlog}  ${data.blog}`,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelWeb}  ${data.web}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic(
            "I'm curious, enthusiastic and student most of the time."
        )}`,
        `${chalk.italic("The rest of the time I experiment with my code,")}`,
        `${chalk.italic("to bring my ideas to life.")}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "green"
    }
);

// Print the card
console.log(me);

// Optional tip to help users use the links
const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");

// Show the tip 
console.log(tip);

// Ask the Inquirer questions. 
prompt(questions).then(answer => answer.action());