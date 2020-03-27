import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  // o pathMatch igual a full define que só vai redirecionar se for exatamente igual
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
