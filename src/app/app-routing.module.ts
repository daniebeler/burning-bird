import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
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
  {
    path: 'trending',
    loadChildren: () => import('./pages/trending/trending.module').then( m => m.TrendingPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [AutoLoginGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home-timeline/home-timeline.module').then( m => m.HomeTimelinePageModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
