import { Component, OnInit } from '@angular/core';
import { voyage } from '../model/voyage.model';
import { log } from 'console';
import { voyageService } from '../services/voyage.service';
import { Type } from '../model/type.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-voyage',
  templateUrl : './add-voyage.component.html',
 
})
export class AddvoyageComponent  implements OnInit{
  newvoyage = new voyage();
  types! : Type[];
  newIdType! : number;
  newType! : Type;

constructor(private voyageService : voyageService,private router : Router){}
  addvoyage(): void {
    this.newvoyage.type = this.types.find(ty => ty.idType == this.newIdType)!;
   this.voyageService.ajoutvoyage(this.newvoyage).subscribe(event => {
    console.log(event);
    this.router.navigate(['voyages']);
   })

  }
  ngOnInit(): void {
this.voyageService.listTypes().
subscribe(ty => {
  this.types = ty._embedded.types;
 
})
console.log(this.types);
  }

}
