import { Component, signal } from '@angular/core';
import { PagesModule } from './pages/pages-module';
import { SideBar } from './shared/components/side-bar/side-bar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [PagesModule,SideBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('nature-app');
}
