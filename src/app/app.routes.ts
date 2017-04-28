import { Routes } from "@angular/router";

import { StorageViewComponent } from "app/views/storage/storage.view";
import { WorkspaceViewComponent } from "app/views/workspace/workspace.view";

export const ROUTES = [
  { path: "storage", component: StorageViewComponent },
  { path: "workspace", component: WorkspaceViewComponent }
] as Routes;