import { defineCollection } from "astro:content";
import { cldAssetsLoader } from "astro-cloudinary/loaders";

export const collections = {
  halloweenPics: defineCollection({
    loader: cldAssetsLoader({
      limit: 4, 
      folder: 'spooky-uploads'
    })
  }),
}