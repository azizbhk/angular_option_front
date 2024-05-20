import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { voyagesComponent } from './voyages/voyages.component';
import { AddvoyageComponent } from './add-voyage/add-voyage.component';
import { FormsModule } from '@angular/forms';
import { UpdatevoyageComponent } from './update-voyage/update-voyage.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { RechercheParTypeComponent } from './recherche-par-type/recherche-par-type.component';
import { RechercherParNomComponent } from './rechercher-par-nom/rechercher-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { ListeTypesComponent } from './liste-types/liste-types.component';
import { UpdateTypeComponent } from './update-type/update-type.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { TokenInterceptor } from './services/token.interceptor';

// import { Ng2SearchPipeModule } from 'ng2-search-filter/src/ng2-filter.module';



@NgModule({
  declarations: [
    AppComponent,
    voyagesComponent,
    AddvoyageComponent,
    UpdatevoyageComponent,
    RechercheParTypeComponent,
    RechercherParNomComponent,
    SearchFilterPipe,
    ListeTypesComponent,
    UpdateTypeComponent,
    LoginComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // Ng2SearchPipeModule,
  ],
  providers: [
    { provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptor,
      multi : true},
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
