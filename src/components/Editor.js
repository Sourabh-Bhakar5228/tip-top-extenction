import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CustomHighlight from "./extensions/CustomHighlight";
import Toolbar from "./Toolbar";

const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit, CustomHighlight],
    content:
      "<p>Hello, this is a Tiptap Editor I believe I should be hired for this Web Development internship because of my strong foundation in web development technologies, my hands-on experience with the MERN stack, and my passion for building impactful applications.I have successfully worked on projects where I developed responsive user interfaces using React.js, designed backend APIs with Node.js and Express.js, and implemented secure and efficient database management with MongoDB. My experience also includes deploying applications on platforms like AWS, giving me a well-rounded understanding of full-stack development.What makes me stand out is my ability to quickly adapt to new tools and technologies, my problem-solving mindset, and my commitment to continuous learning. I am proactive in seeking solutions and thrive in collaborative environments where I can contribute to meaningful projects while enhancing my skills.I am excited about the opportunity to work with your team, apply my knowledge to real-world challenges, and learn from experienced professionals. My technical expertise, enthusiasm, and dedication to growth make me confident that I can add value to your organization.!</p>",
  });

  return (
    <div>
      <h2>My Tiptap Editor</h2>
      <Toolbar editor={editor} />
      <div className="editor-container">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Editor;
