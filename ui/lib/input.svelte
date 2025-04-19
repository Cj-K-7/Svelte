<!-- @component
  ### Input

  base input component
  @props HTMLInputAttributes
  -->
<script>
  /**
   * @type {{label? : string , error?: string, help?: string} & import("svelte/elements").HTMLInputAttributes}
   */
  let { label, error, help, ...attrs } = $props();
</script>

<label>
  {#if label}
    <span class="label">{label}</span>
  {/if}
  <input {...attrs} />
  {#if error}
    <span class="error">{error}</span>
  {/if}
  {#if help}
    <span class="help">{help}</span>
  {/if}
</label>

<style>
 label {
   display: flex;
   flex-direction: column;
   gap: 0.3rem;
 }

  input {
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: none;
    box-shadow: var(--box-shadow);
    transition: all 0.3s ease;
  }

  input:focus {
    box-shadow: var(--box-shadow-hover);
    outline: none;
  }
</style>


