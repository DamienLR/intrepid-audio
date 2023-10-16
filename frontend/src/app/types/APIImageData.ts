import type APIImageFormat from "./APIImageFormat";

type APIImageData = {
  id: number;
  name: string;
  alternativeText: string;
  caption: null;
  width: number;
  height: number;
  formats: {
    thumbnail: APIImageFormat;
    medium: APIImageFormat;
    small: APIImageFormat;
    large: APIImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
};

export default APIImageData;
