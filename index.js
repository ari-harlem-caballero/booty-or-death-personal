const inquirer = require('inquirer');
const {
  welcomePrompt,
  // one,
  // two,
  // three,
  // four,
  // five
} = require('./prompts');


const bootyDeath = (newPrompt) => {
  inquirer
    .prompt({
      type: newPrompt.type,
      message: newPrompt.message,
      name: newPrompt.name,
      choices: newPrompt.choices,
    })
    .then((response) => {
      const res = response.option;

      if (res === 'Heroic Choice') {
        console.log('hi');
      } else {
        console.log('bye');
      }
    });
};

bootyDeath(welcomePrompt);