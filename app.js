const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tasks = [];

function listTasks() {
  console.log('Lista de tareas:');
  tasks.forEach((task, index) => {
    console.log(`[${index + 1}] ${task.isCompleted ? '[X]' : '[ ]'} ${task.description}`);
  });
  console.log('\n');
  promptAction();
}

function addTask(description) {
  return new Promise((resolve, reject) => {
    tasks.push({ isCompleted: false, description });
    resolve('Tarea añadida.');
  });
}

function completeTask(index) {
  return new Promise((resolve, reject) => {
    if (index >= 0 && index < tasks.length) {
      tasks[index].isCompleted = true;
      resolve('Tarea completada.');
    } else {
      reject('Índice de tarea no válido.');
    }
  });
}

function deleteTask(index) {
  return new Promise((resolve, reject) => {
    if (index >= 0 && index < tasks.length) {
      tasks.splice(index, 1);
      resolve('Tarea eliminada.');
    } else {
      reject('Índice de tarea no válido.');
    }
  });
}

async function promptAction() {
  const action = await new Promise((resolve) => {
    rl.question('¿Qué acción deseas realizar? (list/add/complete/delete/exit): ', (action) => {
      resolve(action);
    });
  });

  if (action === 'list') {
    listTasks();
  } else if (action === 'add') {
    const description = await new Promise((resolve) => {
      rl.question('Escribe la descripción de la tarea: ', (description) => {
        resolve(description);
      });
    });
    const result = await addTask(description);
    console.log(result);
    promptAction();
  } else if (action === 'complete') {
    const index = await new Promise((resolve) => {
      rl.question('Escribe el índice de la tarea que deseas marcar como completada: ', (index) => {
        resolve(index);
      });
    });
    try {
      const result = await completeTask(parseInt(index) - 1);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
    promptAction();
  } else if (action === 'delete') {
    const index = await new Promise((resolve) => {
      rl.question('Escribe el índice de la tarea que deseas eliminar: ', (index) => {
        resolve(index);
      });
    });
    try {
      const result = await deleteTask(parseInt(index) - 1);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
    promptAction();
  } else if (action === 'exit') {
    rl.close();
  } else {
    console.log('Acción no válida. Introduce "list", "add", "complete", "delete", o "exit".');
    promptAction();
  }
}


console.log('Gestor de tareas. Introduce "list" para ver las tareas o "exit" para salir.');
promptAction();
