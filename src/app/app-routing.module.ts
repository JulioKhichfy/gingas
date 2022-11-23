import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DoacaoComponent } from './doacao/doacao.component';
import { InstitutoComponent } from './instituto/instituto.component';
import { DindowndownComponent } from './dindowndown/dindowndown.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'doacao',
    component: DoacaoComponent
  },
  {
    path: 'instituto',
    component: InstitutoComponent
  },
  {
    path: 'dindowndown',
    component: DindowndownComponent
  },

  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
