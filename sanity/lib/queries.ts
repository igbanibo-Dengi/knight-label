import { defineQuery } from "next-sanity";

export const ARTISTS_QUERY =
    defineQuery(`*[_type == "artist"] {
    _id,
    name,
    slug,
    image,
    tags
  }`);