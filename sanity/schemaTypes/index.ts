import { type SchemaTypeDefinition } from 'sanity'

import artist from './artist'
import release from './release'
import videoClip from './video-clip'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    artist,
    release,
    videoClip
  ],
}
