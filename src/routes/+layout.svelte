<script>
    import {supabase} from '../supabase';    
    import "../app.css";
    console.log(supabase);
  </script>
  
  <div class="container mx-auto my-6 max-w-lg">
      <slot></slot>
  </div>
  