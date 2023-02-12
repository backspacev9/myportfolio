import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {projectsApps} from "../../constants";
import {ProjectsItem} from "../../interfaces";

interface ProjectsState {
  currentProject: ProjectsItem | null;
}
const InitStateProjcts: ProjectsState = {
  currentProject: projectsApps[0],
};
export const projectsSlice = createSlice({
  name: "projectState",
  initialState: InitStateProjcts,
  reducers: {
    setProject(state, action: PayloadAction<ProjectsItem | null>) {
      state.currentProject = action.payload;
    },
  },
  // extraReducers: {},
});
export const {setProject} = projectsSlice.actions;
export default projectsSlice.reducer;
