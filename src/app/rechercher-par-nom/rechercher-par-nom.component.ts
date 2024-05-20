import { Component, OnInit, } from '@angular/core';
import { voyage } from '../model/voyage.model';
import { Type } from '../model/type.model';
import { voyageService } from '../services/voyage.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-rechercher-par-nom',
  templateUrl: './rechercher-par-nom.component.html',
  styles: ``
})
export class RechercherParNomComponent implements OnInit {
  voyages! : voyage[];
  types! : Type[];
  searcheTrem! : string;
  nomvoyage! : string;
  allvoyages! : voyage[];
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
  rechercherEvent() {
    this.voyageService.rechercherParNom(this.nomvoyage).subscribe(event => {
      this.voyages = event;
    })
  }
  onkeyup(nom: string) {
    console.log("hh");
    this.voyages = this.allvoyages.filter(ev => ev.nomvoyage.toLowerCase().includes(nom))
    
  }
  ngOnInit(): void {
this.voyageService.listEvenemnts().subscribe(event => {
  this.voyages = event
})
    
  }
}
