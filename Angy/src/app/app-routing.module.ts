import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Componente1Component } from 'src/modulo-c1/componente1/componente1.component';
import { Componente2Component } from 'src/modulo-c2/componente2/componente2.component';
import { Componente3Component } from 'src/modulo-c3/componente3/componente3.component';
import { pathToFileURL } from 'url';


const routes: Routes = [
  {
    path:'', component: Componente1Component
  },
  {
    path:'web2', component: Componente2Component
  },
  {
    path:'web3', component: Componente3Component
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
