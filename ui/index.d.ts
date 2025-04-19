/// <reference types="svelte" />
import type { SvelteComponent } from "svelte";
import type {
  HTMLAttributes,
  HTMLButtonAttributes,
  HTMLDialogAttributes,
  HTMLInputAttributes,
} from "svelte/elements";

export class Button extends SvelteComponent<HTMLButtonAttributes> {}

export class Card extends SvelteComponent<HTMLAttributes<HTMLElement>> {}

type InputAttributes = HTMLInputAttributes & {
  label?: string;
  error?: string;
  help?: string;
};

export class Input extends SvelteComponent<InputAttributes> {}
export class Dialog extends SvelteComponent<HTMLDialogAttributes> {}
