import type Release from "./Release";
import type APIImageData from "./APIImageData";

type Artist = {
  id: number;
  name: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  // optional as they can be populated onto the request
  releases?: Release[];
  portrait?: APIImageData;
};

export default Artist;
