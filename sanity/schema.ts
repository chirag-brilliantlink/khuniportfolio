import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import photography from "./schemas/photography";
import blog from "./schemas/blog";
import audioblog from "./schemas/audioblog";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, photography, blog, blockContent, audioblog],
};
