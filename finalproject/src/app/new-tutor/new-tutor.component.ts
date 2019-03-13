import { Component, OnInit } from '@angular/core';
import {TutorServiceService} from '../tutor-service.service'
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-new-tutor',
  templateUrl: './new-tutor.component.html',
  styleUrls: ['./new-tutor.component.css']
})
export class NewTutorComponent implements OnInit {
  newTutor : any[];
   private response : Observable<any[]>;
  constructor(private router: Router, private tutorService: TutorServiceService) { }

  ngOnInit() {
    providers:  [TutorServiceService]
  }
  Submit(password: string,firstname: string, lastname: string, email: string, gender: string, dob: string, phoneNumber: string, courseCode: string, Rating: number){
     var goodData= true;
     var data = [password,firstname,lastname,email,gender,dob,phoneNumber,courseCode,Rating];
     var dataNames=["Password","First Name","Last Name","Email","Gender","Date Of Birth","Phone Number","Course Code","Rating"];
     for(var i = 0;i< data.length;i++)
     {
       if(data[i]==null || data[i].length<1 || data[i]==" ")
       {
         alert("cannot add new Tutor," + dataNames[i] + " is invalid");
         goodData=false;
       }
       
       
     }
    function isValidDate(dateString) {
      var regEx = /^\d{4}-\d{2}-\d{2}$/;
      return dateString.match(regEx) != null;
    }
     
     if(!isValidDate(dob))
     {
         alert("date is invalid");
         goodData=false;
     }
     if(goodData)
     {
      this.tutorService.AddTutor(this.ftbsResponse.bind(this), password, firstname, lastname, email, gender, dob, phoneNumber, courseCode, Rating);    
     }
  }
  ftbsResponse(res: Observable<any[]>) {
    this.response = res;
    console.log(res);
    alert("Tutor Created");
    this.router.navigateByUrl('home');
  }
  goToHome()
  {
    this.router.navigateByUrl('home');
  }
}
