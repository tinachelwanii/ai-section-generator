import { useState } from "react";
import DynamicRenderer from "./components/DynamicRenderer";
import PromptBox from "./components/PromptBox";
import { generateSection, saveSection } from "./services/api";
import "./App.css";

function App() {
  const [layout, setLayout] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);

  const handleGenerate = async (prompt) => {
    try {
      setLoading(true);
      setError("");
      setSaved(false);

      const data = await generateSection(prompt);

      if (data.success) {
        setLayout(data.layout);
      } else {
        setError("Failed to generate section.");
      }
    } catch (error) {
      console.error(error);
      setError("Could not connect to the backend.");
    } finally {
      setLoading(false);
    }
  };

  const updateText = (nodeId, newText) => {
    setLayout((currentLayout) => {
      if (!currentLayout) {
        return currentLayout;
      }

      const updateNode = (node) => {
        if (node.id === nodeId) {
          return {
            ...node,
            props: {
              ...node.props,
              text: newText,
            },
          };
        }

        if (node.children) {
          return {
            ...node,
            children: node.children.map(updateNode),
          };
        }

        return node;
      };

      return updateNode(currentLayout);
    });

    setSaved(false);
  };

  
const handleSaveChanges = async () => {
  if (!layout) {
    return;
  }

  try {
    setError("");

    const data = await saveSection(layout);

    if (data.success) {
      setSaved(true);

      setTimeout(() => {
        setSaved(false);
      }, 1800);
    } else {
      setError("Failed to save changes.");
    }
  } catch (error) {
    console.error(error);
    setError("Could not save changes to the backend.");
  }
};

  return (
    <div className="builder">
      {/* Top Builder Toolbar */}
      <header className="builder-toolbar">
        <div className="brand">
          <div className="brand-icon">U</div>
          <span>Uncody</span>
        </div>

        <div className="toolbar-center">
          <PromptBox
            onGenerate={handleGenerate}
            loading={loading}
          />
        </div>

        <button
          className="save-button"
          onClick={handleSaveChanges}
          disabled={!layout}
        >
          {saved ? "Saved ✓" : "Save Changes"}
        </button>
      </header>

      {/* Error */}
      {error && (
        <div className="builder-error">
          {error}
        </div>
      )}

      {/* Main Canvas */}
      <main className="builder-canvas">
        {layout ? (
          <div className="generated-section">
            <DynamicRenderer
              node={layout}
              onTextChange={updateText}
            />
          </div>
        ) : (
          <div className="canvas-empty">
            <div className="empty-icon">✦</div>

            <h2>Generate a section</h2>

            <p>
              Enter a prompt above to create a webpage section.
            </p>

            <span>
              Try "Build a pricing section with 3 tiers"
            </span>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;