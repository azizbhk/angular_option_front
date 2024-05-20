
import { Component, OnInit } from '@angular/core';
import { voyage } from '../model/voyage.model';
import { voyageService } from '../services/voyage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Type } from '../model/type.model';


@Component({
  selector: 'app-update-voyage',
  templateUrl: './update-voyage.component.html',
  styles: ``
})
export class UpdatevoyageComponent implements OnInit{
  types! : Type[];
  currentvoyage = new voyage();
  updatetypeId! :number;

  constructor( private voyageService : voyageService,
    private activateRoute : ActivatedRoute,private router : Router
  ){  }

  updatevoyage(){
    this.currentvoyage.type = this.types.find(ty => ty.idType == this.updatetypeId)!;
    this.voyageService.updatevoyage(this.currentvoyage).subscribe(voyage => {
      this.router.navigate(['voyages']);
    })
  }

  ngOnInit(): void {
    this.voyageService.listTypes().subscribe(ty => {
      this.types = ty._embedded.types;
    })
    this.voyageService.consultervoyage(this.activateRoute.snapshot.params['id']).subscribe(voyage => {
      this.currentvoyage = voyage;
      this.updatetypeId =  this.currentvoyage.type.idType 
    })
  }
}
