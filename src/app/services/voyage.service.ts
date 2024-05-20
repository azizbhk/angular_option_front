import { Injectable } from '@angular/core';
import { voyage } from '../model/voyage.model';
import { Type } from '../model/type.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TypeWrapper } from '../model/TypeWrapper.model';
import { AuthService } from './auth.service';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
  providedIn: 'root'
})
export class voyageService {
  apiURL: string = 'http://localhost:8088/voyages/api/Type';
  apiURLTypes: string = 'http://localhost:8088/voyages/Type';
  // voyages : voyage[];
  // types : Type[];
  // voyage! : voyage;
  constructor(private http : HttpClient,
    public authService: AuthService) { 
  }
  listEvenemnts(): Observable<voyage[]> {
    return this.http.get<voyage[]>(this.apiURL+"/all");
  }
  listTypes():Observable<TypeWrapper> {

    return this.http.get<TypeWrapper>(this.apiURLTypes); 
  }
  // consulterType(id: number): Type {
  //   return this.types.find(type => type.idType == id)!;
  // }
  ajoutvoyage(event: voyage):Observable<voyage> {
  
    return this.http.post<voyage>(this.apiURL+"/addevent", event);
  }
  supprimervoyage(id: number) {
    const url = `${this.apiURL}/delevent/${id}`;
  
    return this.http.delete(url);
    }
  
  consultervoyage(id:number):Observable<voyage> {
    const url = `${this.apiURL}/getbyid/${id}`;
  
    return this.http.get<voyage>(url );

  }
  // triervoyages() {
  //   this.voyages = this.voyages.sort((n1,n2) => {
  //     if (n1.idvoyage! > n2.idvoyage!) {
  //       return 1;
  //     }
  //     if (n1.idvoyage! < n2.idvoyage!) {
  //       return -1;
  //     }
  //     return 0;
  //   })
  // }
  updatevoyage(event: voyage):Observable<voyage> { 
    
   return this.http.put<voyage>(this.apiURL+"/updateevent", event);
  }
  rechercherParType(idtype: string): Observable<voyage[]> {
    
    const url = `${this.apiURL}/voyagetype/${idtype}`;
    return this.http.get<voyage[]>(url);
  }
  rechercherParNom(nom: string): Observable<voyage[]> {
    
    const url = `${this.apiURL}/eventByName/${nom}`;
    return this.http.get<voyage[]>(url);
  }
  ajouteType(type: Type):Observable<Type> {
    
    return this.http.post<Type>(this.apiURLTypes, type);
  }
  supprimerType(id: number) {
    
    const url = `${this.apiURLTypes}/${id}`;
    return this.http.delete(url);
  }
}
