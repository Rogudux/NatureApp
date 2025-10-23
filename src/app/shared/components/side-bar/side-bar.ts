import { Component } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { PagesModule } from "../../../pages/pages-module";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-side-bar',
  imports: [NzMenuModule, NzIconModule, PagesModule, RouterModule],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.scss'

})
export class SideBar {

}
