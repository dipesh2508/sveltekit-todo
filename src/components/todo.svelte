<script>
	import { deleteTodo, toggleTodoCompleted } from '../stores/todoStore';
	export let todo;
</script>

<li class="bg-white flex items-center shadow-sm border border-slate-300 rounded-lg my-2 py-2 px-4">
	<input
		name="completed"
		type="checkbox"
		checked={todo.completed}
		on:change={() => {
			toggleTodoCompleted(todo.id);
		}}
		class="mr-2 form-checkbox h-5 w-5 text-slate-600"
	/>
	<span class={`flex-1 text-slate-800 text-lg font-medium ${todo.completed ? 'line-through' : ''} `}
		>{todo.text}</span
	>

	<button
		type="button"
		class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
        on:click={() => deleteTodo (todo.id)}
	>Delete</button>
</li>
