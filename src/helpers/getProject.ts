import { projects } from '@mocks'
import type { Project } from '@types'

export const getProject = (name: string): Project | null => projects.find(
  ({ href }) => href === name,
) ?? null
