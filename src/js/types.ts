import type { Snippet } from "svelte"

export type { Snippet }

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
