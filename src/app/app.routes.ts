import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { About } from './about';
import { Frames } from './frames';
import { Sidebar } from './sidebar';
import { NoContent } from './no-content';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',        component: Home },
  { path: 'home',    component: Home },
  { path: 'about',   component: About },
  { path: 'frames',  component: Frames },
  { path: 'sidebar', component: Sidebar },
  {
    path: 'detail', loadChildren: () => System.import('./+detail')
  },
  { path: '**',    component: NoContent },
];
