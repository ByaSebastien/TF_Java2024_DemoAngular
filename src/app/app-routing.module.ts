import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {DemoComponent} from './demo/demo.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {
    path: 'demo',
    component: DemoComponent,
    loadChildren: () => import('./demo/demo.module')
      .then(m => m.DemoModule),
  },
  {
    path: 'exo',
    loadChildren: () => import('./exo/exo.module')
      .then(m => m.ExoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
