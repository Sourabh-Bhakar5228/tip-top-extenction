import { Mark, mergeAttributes } from "@tiptap/core";

const CustomHighlight = Mark.create({
  name: "highlight",

  addOptions() {
    return {
      HTMLAttributes: {
        style: "background-color: yellow;",
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'span[style="background-color: yellow;"]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "span",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
      0,
    ];
  },

  addCommands() {
    return {
      toggleHighlight:
        () =>
        ({ commands }) => {
          return commands.toggleMark(this.name);
        },
    };
  },
});

export default CustomHighlight;
