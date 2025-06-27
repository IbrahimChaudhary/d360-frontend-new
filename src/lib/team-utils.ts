// lib/team-utils.ts
import type { TeamMemberId } from "@/types"

type Field = "name" | "title" | "description"

export function teamKey(id: TeamMemberId, field: Field): `${'team.members.'}${TeamMemberId}.${Field}` {
  return `team.members.${id}.${field}`
}
