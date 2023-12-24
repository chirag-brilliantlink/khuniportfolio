import { defineField, defineType } from "sanity";

export default defineType({
  name: "photography",
  title: "Photography",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      options: {
        layout: "grid",
      },
    }),
  ],
});
