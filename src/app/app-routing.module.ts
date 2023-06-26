import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'local',
    pathMatch: 'full'
  },
  {
    path: 'global',
    loadChildren: () => import('./pages/global-timeline/global-timeline.module').then( m => m.GlobalTimelinePageModule)
  },
  {
    path: 'local',
    loadChildren: () => import('./pages/local-timeline/local-timeline.module').then( m => m.LocalTimelinePageModule)
  },
  {
    path: 'profile/:acct',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
