<!--@component
  ### Card
  
  base card component
  @props HTMLAttributes
-->
<script>
  /**
   * @type {import("svelte/elements").HTMLAttributes<HTMLElement>}
   */
  let { children, ...attrs } = $props();
</script>
 
<div class="card" {...attrs}>
  {@render children?.()}
</div>

<style>
  :root {
    --box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    --box-shadow-hover: 0 1px 5px rgba(0, 0, 0, 0.3);
  }

  .card {
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: var(--box-shadow);
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .card:hover {
    box-shadow: var(--box-shadow-hover);
  }
</style>