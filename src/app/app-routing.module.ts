import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DumbCounterComponent } from './components/dumb-counter/dumb-counter.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'counter',
    component: DumbCounterComponent,
  },
  {
    path: 'songs',
    loadChildren: () =>
      import('./features/songs/songs.module').then((m) => m.SongsModule),
  },
  {
    path: 'redux-counter',
    loadChildren: () =>
      import('./features/redux-counter/redux-counter.module').then(
        (m) => m.ReduxCounterModule,
      ),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
