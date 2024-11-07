import type { Snippet } from "svelte"

export type { Snippet }
export type Tabs = {
  tabs: Array<Tab>;
  sheet_data: any;
  children?: Snippet;
  active?: number;
}

export type Tab = {
  label: string;
  index: number;
  content: Snippet;
}

export type UserData = {
  player_name?: string;
  character_name?: string;
  gym_name?: string;
  backstory?: string;
}
