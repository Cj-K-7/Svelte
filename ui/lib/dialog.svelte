<!-- @component
  ### Dialog

  base dialog component
  @props HTMLDialogAttributes
 -->
<script>
    /** @type {import("svelte/elements").HTMLDialogAttributes} */
    let { children, ...attrs } = $props();
</script>

<dialog {...attrs}>
    {@render children?.()}
</dialog>

<style>
    :root {
        --box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        --box-shadow-hover: 0 1px 5px rgba(0, 0, 0, 0.3);
    }

    dialog { 
        padding: 1rem;
        border: none;
        border-radius: 0.5rem;
        box-shadow: var(--box-shadow);
        cursor: pointer;
        transition: all 0.3s ease;
    }

    dialog:hover {
        box-shadow: var(--box-shadow-hover);
    }

    dialog:open::backdrop {
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(1px);
    }
</style>