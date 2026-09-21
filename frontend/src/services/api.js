const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";
  
export const generateSection = async (prompt) => {
  const response = await fetch(`${API_BASE_URL}/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });

  if (!response.ok) {
    throw new Error("Failed to generate section");
  }

  return response.json();
};

export const saveSection = async (layout) => {
  const response = await fetch(`${API_BASE_URL}/save`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ layout }),
  });

  if (!response.ok) {
    throw new Error("Failed to save section");
  }

  return response.json();
};