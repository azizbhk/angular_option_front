import { Component, OnInit } from '@angular/core';
import { voyage } from '../model/voyage.model';
import { voyageService } from '../services/voyage.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-voyages',
  templateUrl: './voyages.component.html',
})
export class voyagesComponent implements OnInit {

  voyages! : voyage[];
  constructor(private voyageService : voyageService,
    public authService: AuthService) {
  }
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
  ngOnInit(): void {
    this.chargervoyage();
  }

}