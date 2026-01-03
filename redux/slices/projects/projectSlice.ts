import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/lib/api";

export type Project = {
  _id: string;
  title: string;
  techStack: string[];
  keyFeatures: string[];
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
};

type ProjectState = {
  projects: Project[];
  loading: boolean;
  error: string | null;
};

const initialState: ProjectState = {
  projects: [],
  loading: false,
  error: null,
};

// Async thunk to fetch projects
export const fetchProjects = createAsyncThunk<Project[], void, { rejectValue: string }>("projects/fetchProjects", async (_, { rejectWithValue }) => {
  try {
    return await api.get<Project[]>("/api/projects");
  } catch (error: any) {
    return rejectWithValue(error.message || "Failed to fetch projects");
  }
});

// Async thunk to upload/create a project
export const uploadProject = createAsyncThunk<
  Project,
  { title: string; description: string; techStack: string[]; keyFeatures: string[]; liveUrl?: string; githubUrl?: string },
  { rejectValue: string }
>("projects/uploadProject", async (projectData, { rejectWithValue }) => {
  try {
    return await api.post<Project>("/api/projects", projectData);
  } catch (error: any) {
    return rejectWithValue(error.message || "Failed to create project");
  }
});

// Async thunk to delete a project
export const deleteProject = createAsyncThunk<string, string, { rejectValue: string }>("projects/deleteProject", async (id, { rejectWithValue }) => {
  try {
    await api.delete(`/api/projects?id=${id}`);
    return id;
  } catch (error: any) {
    return rejectWithValue(error.message || "Failed to delete project");
  }
});

// Async thunk to update a project
export const updateProject = createAsyncThunk<
  Project,
  { id: string; data: Partial<Omit<Project, "_id">> },
  { rejectValue: string }
>("projects/updateProject", async ({ id, data }, { rejectWithValue }) => {
  try {
    return await api.put<Project>(`/api/projects?id=${id}`, data);
  } catch (error: any) {
    return rejectWithValue(error.message || "Failed to update project");
  }
});

export const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<Project>) => {
      state.projects.unshift(action.payload);
    },

    removeProject: (state, action: PayloadAction<string>) => {
      state.projects = state.projects.filter(
        (project) => project._id !== action.payload
      );
    },
  },
  // Fetch projects
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = action.payload;
        state.error = null;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch projects";
      })
      // Upload project
      .addCase(uploadProject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadProject.fulfilled, (state, action) => {
        state.loading = false;
        state.projects.push(action.payload);
        state.error = null;
      })
      .addCase(uploadProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to create project";
      })
      // Delete project
      .addCase(deleteProject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProject.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.projects = state.projects.filter((p) => p._id !== action.payload);
        state.error = null;
      })
      .addCase(deleteProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to delete project";
      })
      // Update project
      .addCase(updateProject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProject.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.projects.findIndex((p) => p._id === action.payload._id);
        if (index !== -1) {
          state.projects[index] = action.payload;
        }
        state.error = null;
      })
      .addCase(updateProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to update project";
      });
  },
});

export const { addProject, removeProject } = projectSlice.actions;
export default projectSlice.reducer;
