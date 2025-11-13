import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cosmere } from './cosmere/cosmere';
import { Author } from './author/author';
import { Home } from './home/home';
import { Scadrial } from './cosmere/worlds/scadrial/scadrial';
import { Nalthis } from './cosmere/worlds/nalthis/nalthis';

export const routes: Routes = [
  { path: '', component: Home},
  { path: 'cosmere', component: Cosmere },
  { path: 'author', component: Author },
  { path: 'cosmere/scadrial', component: Scadrial},
  { path: 'cosmere/nalthis', component: Nalthis}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }