/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type ComedyClip = {
  _id: string;
  _type: "comedyClip";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  videoFile?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.fileAsset";
    };
    _type: "file";
  };
  thumbnail?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  socialMediaUrls?: Array<{
    platform?: "instagram" | "youtube" | "twitter" | "facebook" | "tiktok" | "other";
    url?: string;
    _type: "socialMediaUrl";
    _key: string;
  }>;
  releaseDate?: string;
};

export type VideoClip = {
  _id: string;
  _type: "videoClip";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  artist?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "artist";
  };
  releaseDate?: string;
  video?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.fileAsset";
    };
    _type: "file";
  };
  thumbnail?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  description?: string;
  youtubeUrl?: string;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Release = {
  _id: string;
  _type: "release";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  artist?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "artist";
  };
  coverArt?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  releaseDate?: string;
  type?: "single" | "ep" | "album";
  tracks?: Array<{
    title?: string;
    duration?: string;
    _key: string;
  }>;
};

export type Artist = {
  _id: string;
  _type: "artist";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  bio?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h2" | "h3";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  socialLinks?: Array<{
    platform?: string;
    url?: string;
    _key: string;
  }>;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | Geopoint | ComedyClip | VideoClip | SanityFileAsset | Release | Artist | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata | Slug;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./sanity/lib/queries.ts
// Variable: ARTISTS_QUERY
// Query: *[_type == "artist"] {    _id,    name,    slug,    socialLinks,    image,  }
export type ARTISTS_QUERYResult = Array<{
  _id: string;
  name: string | null;
  slug: Slug | null;
  socialLinks: Array<{
    platform?: string;
    url?: string;
    _key: string;
  }> | null;
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
}>;
// Variable: SINGLE_ARTISTS_QUERY
// Query: * [_type == "artist" && slug.current == $slug][0] {    _id,    name,    slug,    image,    bio,    socialLinks,  }
export type SINGLE_ARTISTS_QUERYResult = {
  _id: string;
  name: string | null;
  slug: Slug | null;
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
  bio: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "h2" | "h3" | "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }> | null;
  socialLinks: Array<{
    platform?: string;
    url?: string;
    _key: string;
  }> | null;
} | null;
// Variable: COMEDY_CLIP_QUERY
// Query: *[_type == "comedyClip"] {    _id,    title,    videoFile,    videos,    thumbnail,    socialMediaUrls,    releaseDate  }
export type COMEDY_CLIP_QUERYResult = Array<{
  _id: string;
  title: string | null;
  videoFile: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.fileAsset";
    };
    _type: "file";
  } | null;
  videos: null;
  thumbnail: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
  socialMediaUrls: Array<{
    platform?: "facebook" | "instagram" | "other" | "tiktok" | "twitter" | "youtube";
    url?: string;
    _type: "socialMediaUrl";
    _key: string;
  }> | null;
  releaseDate: string | null;
}>;
// Variable: RECENT_VIDEOS_QUERY
// Query: *[_type == "comedyClip"] | order(releaseDate desc)[0...6] {    _id,    title,    thumbnail,    socialMediaUrls,    releaseDate  }
export type RECENT_VIDEOS_QUERYResult = Array<{
  _id: string;
  title: string | null;
  thumbnail: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
  socialMediaUrls: Array<{
    platform?: "facebook" | "instagram" | "other" | "tiktok" | "twitter" | "youtube";
    url?: string;
    _type: "socialMediaUrl";
    _key: string;
  }> | null;
  releaseDate: string | null;
}>;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "*[_type == \"artist\"] {\n    _id,\n    name,\n    slug,\n    socialLinks,\n    image,\n  }": ARTISTS_QUERYResult;
    " * [_type == \"artist\" && slug.current == $slug][0] {\n    _id,\n    name,\n    slug,\n    image,\n    bio,\n    socialLinks,\n  }": SINGLE_ARTISTS_QUERYResult;
    "*[_type == \"comedyClip\"] {\n    _id,\n    title,\n    videoFile,\n    videos,\n    thumbnail,\n    socialMediaUrls,\n    releaseDate\n  }\n": COMEDY_CLIP_QUERYResult;
    "\n  *[_type == \"comedyClip\"] | order(releaseDate desc)[0...6] {\n    _id,\n    title,\n    thumbnail,\n    socialMediaUrls,\n    releaseDate\n  }\n": RECENT_VIDEOS_QUERYResult;
  }
}
