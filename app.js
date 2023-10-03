const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tasks = [];

function displayTasks() {
  if (tasks.length === 0) {
    console.log('No tasks.');
  } else {
    console.log('Tasks:');
    tasks.forEach((task, index) => {
      const status = task.completed ? '✅' : '❌';
      console.log(`[${index + 1}] ${status} ${task.description}`);
    });
  }
}

function addTask(description) {
  tasks.push({ description, completed: false });
  console.log(`Task "${description}" added.`);
  displayTasks();
}

function deleteTask(index) {
  if (index >= 1 && index <= tasks.length) {
    const deletedTask = tasks.splice(index - 1, 1);
    console.log(`Task "${deletedTask[0].description}" deleted.`);
  } else {
    console.log('Invalid task index.');
  }
  displayTasks();
}

function completeTask(index) {
  if (index >= 1 && index <= tasks.length) {
    tasks[index - 1].completed = true;
    console.log(`Task "${tasks[index - 1].description}" marked as completed.`);
  } else {
    console.log('Invalid task index.');
  }
  displayTasks();
}

function handleInput(input) {
  const args = input.split(' ');
  const command = args[0].toLowerCase();
  switch (command) {
    case 'add':
      addTask(args.slice(1).join(' '));
      break;
    case 'delete':
      deleteTask(parseInt(args[1]));
      break;
    case 'complete':
      completeTask(parseInt(args[1]));
      break;
    case 'list':
      displayTasks();
      break;
    case 'exit':
      rl.close();
      break;
    default:
      console.log('Invalid command. Available commands: add, delete, complete, list, exit');
      break;
  }
}

console.log('Task Manager');
console.log('Available commands: add, delete, complete, list, exit');

rl.on('line', (input) => {
  handleInput(input);
});

rl.on('close', () => {
  console.log('Goodbye!');
  process.exit(0);
});
