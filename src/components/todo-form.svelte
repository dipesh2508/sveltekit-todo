<script>
    import {addTodo} from '../stores/todoStore'
	let todo = '';

	const handleSubmit = () => {
        addTodo(todo);
        todo = '';
		console.log('submitting');
	};
</script>

<form class="my-6" on:submit|preventDefault={handleSubmit}>
	<div class="flex flex-col text-sm mb-2">
		<label for="todo" class="font-bold mb-2 text-slate-800">Todo</label>
		<input
			type="text"
			name="todo"
			placeholder="Add a todo"
			bind:value={todo}
			class="apperance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-slate-400 rounded-lg"
		/>
	</div>
	<button
		type="submit"
		class="w-full shadow-sm rounded bg-emerald-500 border-2 border-emerald-500 hover:bg-transparent hover:text-emerald-500 text-slate-50 py-2 px-4"
		>submit</button
	>
</form>
