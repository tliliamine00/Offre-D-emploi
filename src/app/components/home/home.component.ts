import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/models/candidate';
import { Offre } from 'src/app/models/offre';
import { CandidateService } from 'src/app/services/candidate.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

candidate: Candidate = new Candidate();

  

  constructor(private candidateService: CandidateService) { }

  listCandidate: any = [];
  errorS: string = "";

  ngOnInit(): void {
    this.candidateService.getAll().subscribe(
      (res: any) => { this.listCandidate = res; console.log(res) },
      (err: any) => { console.log(err) }
    )
  }

  createCandidate(){
    this.candidateService.createCandidate(this.candidate).subscribe(data =>{
      console.log(data);
    },
    error => console.log(error));
  }

  check_val() {
    var bad_words = new Array("welcome", "back");
    var check_text = this.candidate.mlettre;
    if(!check_text.length)
      return;
    let error = 0;
    for (var i = 0; i < bad_words.length; i++) {
      var val = bad_words[i];
      if ((check_text.toLowerCase()).indexOf(val.toString()) > -1) {
        error = error + 1;

      }
    }
    if (error > 0) {
      this.errorS = "WARNING:klem khayeb!!";

    }
    else { this.errorS = ""; }
  }

  saveCandidate(){
    this.candidateService.createCandidate(this.candidate).subscribe(data =>{
      console.log(data);
    },
    error => console.log(error));
  }

  onSubmit() {
    if(!this.errorS.length)
      this.saveCandidate();
  }
}
