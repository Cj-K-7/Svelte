<!--@component 
  ### Buttom

  base button component
  @props HTMLButtonAttributes
-->
<script>
  /**
   * @type {import("svelte/elements").HTMLButtonAttributes}
   */
  let {children, ...attrs} = $props();
</script>


<button {...attrs}>
 {@render children?.()}
</button>

<style>
  :root{
    --box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    --hover-filter: brightness(0.9);
  }

  button {
    padding: 0.5rem 1rem;
    color: var(--on-primary);
    background-color: var(--primary);
    border: none;
    border-radius: 0.5rem;
    box-shadow: var(--box-shadow);
    cursor: pointer;
    transition: all 0.3s ease;
  }

  button:hover {
    filter: var(--hover-filter);
  }
</style>