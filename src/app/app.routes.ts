import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:"", redirectTo:"admin", pathMatch:"full"},
    {
        path: "",
        loadChildren: ()=>
            import("./pages/pages-module").then(m=>m.PagesModule)
    }
    
];
