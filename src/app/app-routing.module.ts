import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimationsComponent } from './animations/animations.component';

const routes: Routes = [
  { path: 'animations', component: AnimationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
