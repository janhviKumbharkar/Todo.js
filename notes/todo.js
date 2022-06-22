let input = prompt("what you want to say??");
const Todos = ['Do_Exercise', 'Study'];

while (input !== 'quit') {
	if (input === 'list') {
		for (let i = 0; i < Todos.length; i++) {
			console.log(`${i} : ${Todos[i]}`);
		}
	}

	else if (input === 'new') {
		const newTodo = prompt("enter your new input");
		Todos.push(newTodo);
		console.log(`${newTodo} added to the list`)
	}
	else if (input === 'delete') {
		const index = parseInt(prompt('enter index you want to delete : '));
		if (!Number.isNaN(index)) {
			const deleted = Todos.splice(index, 1);
			console.log(`OK! Deleted ${deleted[0]}`);
		}
		else {
			console.log('unknown index')
		}
	}
	input = prompt("what you want to say??");
}


console.log("OK ! You quit the app")
