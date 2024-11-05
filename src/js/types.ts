import type { Snippet } from "svelte"

export type Tab = {
  label: string
  index: number
  content: Snippet
}
