import { type SchemaTypeDefinition } from 'sanity'
import { author } from './autor'
import { startup } from './startup'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, startup],
}
