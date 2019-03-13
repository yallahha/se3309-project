import { Component, OnInit } from '@angular/core';
import {TutorServiceService} from '../tutor-service.service'
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
//FINDS THE LOWESST SALARY OF A SPECFIC SUBJECT 
  private response : Observable<any[]>;
  constructor(private router: Router, private tutorService: TutorServiceService) { }
  
  ngOnInit() {
    providers:  [TutorServiceService]
  }
  FindTutors(subject:string){
    
    if(subject==null || subject=="" || subject==" ")
    {
      alert("please enter a SUBJECT");
    }
    else
    {
     this.tutorService.findCheapestTutorBySubject(this.ftbsResponse.bind(this), subject);    
    }
  }
  ftbsResponse(res: Observable<any[]>) {
    if(res.length==0)
    {
      alert("Cannot find the cheapest tutor for this subject");
    }
    
    this.response = res;
    console.log(res);
  }
  
  goToHome()
  {
    this.router.navigateByUrl('home');
  }
}
