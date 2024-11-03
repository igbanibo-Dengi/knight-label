import { type SchemaTypeDefinition } from 'sanity'

import artist from './artist'
import release from './release'
import videoClip from './video-clip'
import comedyClips from './comedy-clips'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    artist,
    release,
    videoClip,
    comedyClips
  ],
}
