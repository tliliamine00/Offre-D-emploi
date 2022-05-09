import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offre } from '../models/offre';
import { OffreService } from '../services/offre.service';

@Component({
  selector: 'app-offre-add',
  templateUrl: './offre-add.component.html',
  styleUrls: ['./offre-add.component.sass']
})
export class OffreAddComponent implements OnInit {

offre: Offre= new Offre();
  message:string;

  constructor(private offreService : OffreService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveOffre(){
    this.offreService.createOffre(this.offre).subscribe(data =>{
      console.log(data);
    },
    error => console.log(error));
  }
goToOffreList(){
this.router.navigate(['models/offres']);
}

  onSubmit(){
    console.log(this.offre);
    this.saveOffre();
    this.message= "Offre" + "   " + this.offre.id + " " + "ajouté avec succés!";
    
  }

}
