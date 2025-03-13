import BoxHeader from "./BoxHeader";
import { marked } from 'marked';

marked.setOptions({
  breaks: true
})

const renderer = new marked.Renderer();

const MarkdownPreviewer = ({text}) => {
  const divBackgroundColor = "#c0d8d8";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "60rem",
        height: "auto",
        minHeight: "12rem",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: divBackgroundColor,
        border: "1px solid black"
      }}
    >
      <BoxHeader name="Previewer" />
      <div
        id="preview"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          textAlign: "left",
          padding: "12px"
        }}
        dangerouslySetInnerHTML={{
          __html: marked(text, { renderer})
        }}
      >
      </div>
    </div>
  )
}

export default MarkdownPreviewer;
