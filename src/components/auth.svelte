<script>
	import { supabase } from '../supabase.js';

	let loading = false;
	let email;

	const handleLogin = async () => {
		try {
			console.log(email);
			const { error } = await supabase.auth.signIn({ email });

			if (error) {
				throw error;
			}

			alert('Check your email for the login link!');
		} catch (error) {
			console.error(error);
			alert(error.error_description || error.message);
		} finally {
			loading = false;
		}
	};
</script>

<h1 class="text-2xl font-bold text-center text-slate-800 md:text-3xl">Log In</h1>
<p class="text-center mt-2">Sign in via magic link with your email below</p>

<form on:submit|preventDefault={handleLogin}>
	<div class="flex flex-col text-sm mb-2">
		<label for="email" class="font-bold mb-2 text-slate-800">Email</label>
		<input
			name="email"
			class="appearance-none shadow-sm border border-slate-200 p-2 focus:outline-none focus:border-slate-500 rounded-lg"
			type="email"
            placeholder="Your email"
            bind:value={email}
		/>
	</div>
    <button type="submit" class="w-full shadow-sm rounded bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4">
Log In
    </button>
</form>
