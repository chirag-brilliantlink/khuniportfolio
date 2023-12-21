import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import category from "./schemas/category";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, blockContent],
};
