import { useState } from "react";

function PromptBox({ onGenerate, loading }) {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!prompt.trim()) {
      return;
    }

    await onGenerate(prompt);
  };

  return (
    <form className="prompt-box" onSubmit={handleSubmit}>
      <input
        type="text"
        value={prompt}
        onChange={(event) => setPrompt(event.target.value)}
        placeholder='Try "Build a pricing section"'
        disabled={loading}
      />

      <button
        type="submit"
        disabled={loading || !prompt.trim()}
      >
        {loading ? "Generating..." : "Generate"}
      </button>
    </form>
  );
}

export default PromptBox;