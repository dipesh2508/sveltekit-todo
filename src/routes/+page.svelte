<script>
    import TodoForm from '../components/todo-form.svelte';
    import Todo from '../components/todo-form.svelte';
    import { todos } from '../stores/todoStore'
  </script>
  
  
  <main>
      <h1 class="text-2xl md:text-3xl font-bold text-center text-slate-800">
          My Todos
      </h1>
      <TodoForm />
      {#each $todos as todo, index}
        <Todo todo={todo} index={index} />
      {/each}
  </main>
    
    <style lang="postcss">
      :global(html) {
        background-color: theme(colors.gray.100);
      }
    </style>