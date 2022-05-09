import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Offre } from '../models/offre';
import { OffreService } from '../services/offre.service';

@Component({
  selector: 'app-update-offre',
  templateUrl: './update-offre.component.html',
  styleUrls: ['./update-offre.component.sass']
})
export class UpdateOffreComponent implements OnInit {
offre_id: number;

  message:string;
offre: Offre = new Offre();
  constructor(private offreService: OffreService,
    private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.offre_id=this.route.snapshot.params['id'];
    this.offreService.getOffreByid(this.offre_id).subscribe(data =>{
this.offre=data;
    }, error => console.log(error))
  }
updateOffre(){
  this.offreService.updateOffre(this.offre.id, this.offre).subscribe(data =>{
    console.log(data);
    this.offre = new Offre();
    //this.gotoList();
  }, error => console.log(error))
}
onSubmit(){
  console.log(this.offre)
  this.updateOffre();
}

}
