function DynamicRenderer({ node, onTextChange }) {
  if (!node) {
    return null;
  }

  const { id, type, props = {}, children = [] } = node;

  const handleTextChange = (event) => {
    const newText = event.currentTarget.textContent;

    if (onTextChange && id) {
      onTextChange(id, newText);
    }
  };

  const renderChildren = () => {
    return children.map((child) => (
      <DynamicRenderer
        key={child.id}
        node={child}
        onTextChange={onTextChange}
      />
    ));
  };

  switch (type) {
    case "section":
      return (
        <section
          className={`node-section ${props.className || ""}`}
          data-node-id={id}
        >
          {renderChildren()}
        </section>
      );

    case "container":
      return (
        <div
          className={`node-container ${props.className || ""}`}
          data-node-id={id}
        >
          {renderChildren()}
        </div>
      );

    case "card":
      return (
        <div
          className={`node-card ${props.className || ""}`}
          data-node-id={id}
        >
          {renderChildren()}
        </div>
      );

    case "heading": {
      const level = props.level || 1;
      const HeadingTag = `h${level}`;

      return (
        <HeadingTag
          className="node-heading"
          data-node-id={id}
          contentEditable
          suppressContentEditableWarning
          onBlur={handleTextChange}
        >
          {props.text || ""}
        </HeadingTag>
      );
    }

    case "paragraph":
      return (
        <p
          className="node-paragraph"
          data-node-id={id}
          contentEditable
          suppressContentEditableWarning
          onBlur={handleTextChange}
        >
          {props.text || ""}
        </p>
      );

    case "button":
      return (
        <button
          type="button"
          className="node-button"
          data-node-id={id}
          contentEditable
          suppressContentEditableWarning
          onBlur={handleTextChange}
        >
          {props.text || ""}
        </button>
      );

    default:
      console.warn(`Unknown node type: ${type}`);
      return null;
  }
}

export default DynamicRenderer;