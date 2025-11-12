import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cosmere } from './cosmere/cosmere';
import { Author } from './author/author';
import { Home } from './home/home';
import { Scadrial } from './cosmere/worlds/scadrial/scadrial';

export const routes: Routes = [
  { path: '', component: Home},
  { path: 'cosmere', component: Cosmere },
  { path: 'author', component: Author },
  { path: 'cosmere/scadrial', component: Scadrial}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }