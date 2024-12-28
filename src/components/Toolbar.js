import React from "react";

const Toolbar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div style={{ marginBottom: "10px" }}>
      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        disabled={!editor.can().chain().focus().toggleHighlight().run()}
      >
        Toggle Highlight
      </button>
    </div>
  );
};

export default Toolbar;
