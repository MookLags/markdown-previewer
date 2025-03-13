import BoxHeader from './BoxHeader';
import MarkdownPreviewer from './MarkdownPreviewer';
import { useState } from 'react';

const MarkdownEditor = ({text, setText}) => {
  const divBackgroundColor = "#c0d8d8";

  const handleChange = (e) => {
    setText(e.target.value);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "auto",
        height: "auto",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "15px",
        marginBottom: "15px",
        backgroundColor: divBackgroundColor,
        border: "1px solid black"
      }}
    >
      <BoxHeader name="Editor" />
      <textarea
        id="editor"
        style={{
          textDecoration: "none",
          border: "none",
          width: "35rem",
          height: "12rem",
          padding: "8px",
          overflowX: "hidden",
          overflowY: "auto",
          resize: "vertical",
          background: divBackgroundColor
        }}
        onChange={handleChange}
        value={text}
      />
    </div>
  );
}

export default MarkdownEditor;

