const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    let errorData;
    try {
      errorData = await response.json();
    } catch (e) {
      errorData = { error: response.statusText };
    }
    throw new Error(errorData.error || `API error: ${response.status}`);
  }
  return response.json();
}

const getFullUrl = (path: string) => {
  if (path.startsWith("http")) return path;
  if (!API_URL) return path;

  // Normalize base and path
  const base = API_URL.replace(/\/+$/, ""); // "http://localhost:3000/api"
  const normalizedPath = path.startsWith("/") ? path : `/${path}`; // "/api/projects"

  // Check if base ends with what path starts with (e.g., both have /api)
  const baseSegments = base.split("/");
  const lastBaseSegment = baseSegments[baseSegments.length - 1]; // "api"
  const pathSegments = normalizedPath.split("/").filter(Boolean); // ["api", "projects"]

  if (lastBaseSegment === pathSegments[0]) {
    // Remove the duplicated segment from the path
    return `${base}/${pathSegments.slice(1).join("/")}`;
  }

  return `${base}${normalizedPath}`;
};

export const api = {
  get: async <T>(path: string, options?: RequestInit): Promise<T> => {
    const res = await fetch(getFullUrl(path), {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
    });
    return handleResponse<T>(res);
  },

  post: async <T>(path: string, body: any, options?: RequestInit): Promise<T> => {
    const res = await fetch(getFullUrl(path), {
      method: "POST",
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      body: JSON.stringify(body),
    });
    return handleResponse<T>(res);
  },

  put: async <T>(path: string, body: any, options?: RequestInit): Promise<T> => {
    const res = await fetch(getFullUrl(path), {
      method: "PUT",
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      body: JSON.stringify(body),
    });
    return handleResponse<T>(res);
  },

  delete: async <T>(path: string, options?: RequestInit): Promise<T> => {
    const res = await fetch(getFullUrl(path), {
      method: "DELETE",
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
    });
    return handleResponse<T>(res);
  },
};
