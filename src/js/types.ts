import type { Snippet } from "svelte"

export type Tabs = {
  tabs: Array<Tab>;
  sheet_data: any;
  children?: Snippet;
}

export type Tab = {
  label: string;
  index: number;
  content: Snippet;
}

export type TextInput = {
  name: string;
  type: string;
  id: string;
  hideLabel?: boolean;
  label: string;
  labelTag?: Snippet;
  required?: boolean;
  className?: string;
  rows?: number;
  placeholder?: string;
  value?: string;
}

export type TextInputElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement

export type UserData = {
  player_name?: string;
  character_name?: string;
  gym_name?: string;
  backstory?: string;
}
