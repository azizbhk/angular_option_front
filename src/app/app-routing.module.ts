import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { voyagesComponent } from './voyages/voyages.component';
import { AddvoyageComponent } from './add-voyage/add-voyage.component';
import { UpdatevoyageComponent } from './update-voyage/update-voyage.component';
import { RechercheParTypeComponent } from './recherche-par-type/recherche-par-type.component';
import { RechercherParNomComponent } from './rechercher-par-nom/rechercher-par-nom.component';
import { ListeTypesComponent } from './liste-types/liste-types.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { voyageGuard } from './voyage.guard';

const routes: Routes = [
  {path: "voyages", component : voyagesComponent},
  {path: "listTypes", component : ListeTypesComponent},
  {path: "add-voyage", component : AddvoyageComponent , canActivate:[voyageGuard]},
  {path: "updatevoyage/:id", component : UpdatevoyageComponent},
  {path: "rechercheParType", component : RechercheParTypeComponent},
  {path: "rechercheParNom", component : RechercherParNomComponent},
  {path: "login",component : LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},

  { path: "", redirectTo: "voyages", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [voyageGuard]
})
export class AppRoutingModule { }
