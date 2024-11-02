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