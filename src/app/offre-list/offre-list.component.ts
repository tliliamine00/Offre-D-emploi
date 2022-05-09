import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offre } from '../models/offre';
import { OffreService } from '../services/offre.service';



@Component({
  selector: 'app-offre-list',
  templateUrl: './offre-list.component.html',
  styleUrls: ['./offre-list.component.sass']
})
export class OffreListComponent implements OnInit {

  offres:any[];
  /*offre: Offre = new Offre();
  onSubmit(){
    console.log(this.offre);
  }*/
  
  constructor(private offreService : OffreService, private router: Router) {this
    .offres
    =
    [
    {offre_id 
    :
    1
    ,
    offre_description
    :
    "PC Asus"
    ,
    offre_type
    :"3000.600"
    }
    ]; }
  /*listOffre:any=[];*/
  ngOnInit(): void {
    this.getOffres()
    /*this.offreService.listOffre().subscribe(ofr=> {
console.log(ofr);
this.offres=ofr;});*/
/*this.getOffres();*/
    /*this.offres=[{
"offre_id":2,
"offre_description":"manuel",
"offre_type":"manuel"
    }];*/
    /*this.offreService.getOffres().subscribe(
      (res:any)=>{this.listOffre=res;console.log(res)},
      (err:any)=>{console.log(err)})*/
  }
  private getOffres(){
    this.offreService.listOffre().subscribe(data =>{
      this.offres=data;
      console.log(this.offres);
      console.log(data);
    })
  }
updateOffre(offre_id: number){
this.router.navigate(['update-offre', offre_id]);
}
}
