import { defineConfig } from 'astro/config';

// https://astro.build/config
import content from "astro-content";

// https://astro.build/config
export default defineConfig({
  integrations: [content()],  
});