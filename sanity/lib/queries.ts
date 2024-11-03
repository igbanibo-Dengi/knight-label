import { defineQuery } from "next-sanity";

export const ARTISTS_QUERY =
  defineQuery(`*[_type == "artist"] {
    _id,
    name,
    slug,
    image,
  }`);

export const SINGLE_ARTISTS_QUERY =
  defineQuery(` * [_type == "artist" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    image,
    bio,
    socialLinks,
  }`);

export const COMEDY_CLIP_QUERY =
  defineQuery(`*[_type == "comedyClip"] {
    _id,
    title,
    videoFile,
    videos,
    thumbnail,
    socialMediaUrls,
    releaseDate
  }
`);

export const RECENT_VIDEOS_QUERY = defineQuery(`
  *[_type == "comedyClip"] | order(releaseDate desc)[0...6] {
    _id,
    title,
    thumbnail,
    socialMediaUrls,
    releaseDate
  }
`);