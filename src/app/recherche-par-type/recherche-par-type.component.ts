import { Component, OnInit } from '@angular/core';
import { voyage } from '../model/voyage.model';
import { Type } from '../model/type.model';
import { voyageService } from '../services/voyage.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-recherche-par-type',
  templateUrl: './recherche-par-type.component.html',
})
export class RechercheParTypeComponent implements OnInit {

voyages! : voyage[];
types! : Type[];
idType! : number;
constructor(private voyageService : voyageService,
  public authService: AuthService
) { }
supprimervoyage(e:voyage) {
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
     this.voyageService.supprimervoyage(e.idvoyage).subscribe(() => {
      console.log("voyage supprimé");
      this.chargervoyage();
    })
  }
  chargervoyage() {
    this.voyageService.listEvenemnts().subscribe(event =>{
      this.voyages = event
    }
      
    )
  }
onChange(){ 
  this.voyageService.rechercherParType(String(this.idType)).subscribe(event => {
    this.voyages = event;
  })
}
ngOnInit(): void {
  this.voyageService.listTypes().subscribe(ty => {
    this.types = ty._embedded.types;
  })  
  
}
}
