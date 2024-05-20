import { Component, OnInit } from '@angular/core';
import { Type } from '../model/type.model';
import { voyageService } from '../services/voyage.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-liste-types',
  templateUrl: './liste-types.component.html',
  styles: ``
})
export class ListeTypesComponent implements OnInit {


  types!: Type[];
  ajout: boolean = true;
  updateType: Type = {
    idType: 0,
    nomType: '',
  }
  constructor(private voyageService: voyageService,
    public authService: AuthService
  ) {

  }

  typeUpdated(type: Type) {
    this.voyageService.ajouteType(type).subscribe(
      () => {
        this.chargerType();
      }
    );

  }
  chargerType() {
    this.voyageService.listTypes().subscribe(ty => {
      this.types = ty._embedded.types;
    })
  }
  updatetype(ty: Type) {
    this.updateType = ty;
    this.ajout = false;
  }
  supprimerType(ty: Type) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.voyageService.supprimerType(ty.idType).subscribe(() => {
        console.log("type supprimé");
        this.chargerType();
      })
  }
  ngOnInit(): void {
    this.voyageService.listTypes().subscribe(ty => {
      this.types = ty._embedded.types;
    })
  }

}
