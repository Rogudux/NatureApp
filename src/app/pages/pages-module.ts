import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminLayout } from './admin-layout/admin-layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzCardModule } from 'ng-zorro-antd/card';
import { adminRoutes } from './pages.routes';
import { PlaceService } from '../core/services/place.service';
import { TrailService } from '../core/services/trail.service';
import { MapComponent } from './map/map';
import { Places } from './places/places';
import { PlacesDetail } from './places-detail/places-detail';
import { TrailsComponent } from './trails-component/trails-component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzModalModule } from 'ng-zorro-antd/modal';




@NgModule({
  declarations: [
    MapComponent,Places,PlacesDetail,TrailsComponent,AdminLayout
  ],
  imports: [
    NzTableModule, NzIconModule, NzButtonModule, NzCardModule, CommonModule, RouterModule.forChild(adminRoutes), NzTagModule, NzTagModule, NzTagModule, 
    NzDescriptionsModule,  NzPageHeaderModule, NzDescriptionsModule, NzImageModule, NzGridModule, NzSpinModule, NzModalModule

  ],
  providers: [PlaceService, TrailService],
  exports:[
    MapComponent,
    Places,
    PlacesDetail,
    TrailsComponent,
    RouterModule,
    AdminLayout

  ] 
})
export class PagesModule { }


