import type Artist from "./Artist";
import type APIImageData from "./APIImageData";

type Release = {
  id: number;
  title: string;
  description: string;
  genre: string;
  price: number;
  slug: string;
  releasedOn: string;
  tracklist: string[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  // optional as they can be populated onto the request
  artists?: Artist[];
  coverArt?: APIImageData;
};

export default Release;
