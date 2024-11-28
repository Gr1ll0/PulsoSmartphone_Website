import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPulsoComponent } from '../components/landing-pulso/landing-pulso.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'landing',
    loadComponent: () =>
        import('../components/landing-pulso/landing-pulso.component').then((m) => m.LandingPulsoComponent)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
