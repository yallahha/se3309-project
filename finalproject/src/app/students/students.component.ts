import { Component, OnInit } from '@angular/core';
import {TutorServiceService} from '../tutor-service.service'
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
private response : Observable<any[]>;
  constructor(private router: Router, private tutorService: TutorServiceService) { }
  ngOnInit() {
    providers: [TutorServiceService]
  }
  findStudents(tutorid: number,subject:string){
    
    var valTutor = true;
    var valSub = true;
    if(tutorid==null|| !tutorid)
    {
      alert("Please Enter A Tutor Id");
      valTutor=false;
    }
    if(subject==null || subject.length<3)
    {
      alert("Please Enter A Subject");
      valSub=false;
    }
    
    if(valSub && valTutor)
     this.tutorService.findStudentsByTutorsSubject(this.ftbsResponse.bind(this), tutorid, subject);    
  }
  ftbsResponse(res: Observable<any[]>) {
    if(res.length==0)
    {
      alert("Cannot find Students for this tutor");
    }
    else
    {
      this.response = res;
      console.log(res);
    }
  }
  goToHome()
  {
    this.router.navigateByUrl('home');
  }
}
