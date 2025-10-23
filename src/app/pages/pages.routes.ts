import { Routes } from "@angular/router";
import { AdminLayout } from "./admin-layout/admin-layout";
import { Places } from "./places/places";
import { MapComponent } from "./map/map";
import { PlacesDetail } from "./places-detail/places-detail";
import { TrailsComponent } from "./trails-component/trails-component";

export const adminRoutes : Routes = [
    {
        path: "admin",
        component : AdminLayout,
        children: [
            {path:"home",
                component: MapComponent
            },
            {
                path:"places",
                component: Places
            },
            {
                path:"places/:id",
                component: PlacesDetail
            },
            {
                path:'trails',
                component: TrailsComponent
            },
           
            {
                path: "",
                pathMatch:"full",
                redirectTo:"home"
            }
        ]
    }
]