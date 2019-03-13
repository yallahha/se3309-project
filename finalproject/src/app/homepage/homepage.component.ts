import { Component, OnInit } from '@angular/core';
import {TutorServiceService} from '../tutor-service.service'
import {Router} from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  private tutors : Observable<any[]>;
  private logout: string;
  subjectName;
  
  constructor(private _router:Router,private _ts:TutorServiceService) { }

  ngOnInit() {
    
  }
  findTutorBySubject(subject: string)
  {
    if(subject.length>2)
    this._ts.findTutorBySubject(subject,this.ftbsResponse.bind(this));
    else
    {
      if(subject==null || subject =="" || subject ==" ")
      alert("Please enter a subject");
    }
  }
  ftbsResponse(res: Observable<any[]>) {
    this.tutors = res;
    console.log(res);
  }
   ftbsResponse2(res: string) {
    this.logout = res;
    console.log(res);
  }
  
  Logout(){
    this._ts.logoutOfDatabase(this.ftbsResponse2.bind(this));
    this._router.navigateByUrl('');
  }
  addTutor(){
    this._router.navigateByUrl('newTutor')
  }
  Sort(){
    this._router.navigateByUrl('sort')
  }
  FindStudents(){
    this._router.navigateByUrl('students')
  }
  Increase(){
    this._router.navigateByUrl('salary')
  }
  
}
