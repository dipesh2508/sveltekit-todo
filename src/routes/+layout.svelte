<script>
    import {supabase} from '../supabase';    
    import "../app.css";
    import Auth from '../components/auth.svelte'
    console.log(supabase);
  </script>
  
  <div class="container mx-auto my-6 max-w-lg">
    <Auth />
      <slot></slot>
  </div>
  