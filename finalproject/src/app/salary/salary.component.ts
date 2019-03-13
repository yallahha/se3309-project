import { Component, OnInit } from '@angular/core';
import {TutorServiceService} from '../tutor-service.service'
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {
//INCREASES THE SALARIES OF ALL TUTORS WITH RATING GREATER THAN
private response : Observable<any[]>;
  constructor(private router: Router, private tutorService: TutorServiceService) { }

  ngOnInit() {
      providers:  [TutorServiceService]
  }
   increaseSalary(salary: number,subject:string)
   {
     var goodSal=true;
     var goodSub=true;
     
     if(subject.length<1  || subject ==null)
     {
       alert("Please Subject");
       goodSub=false;
     }
     
     if(!salary)
     {
       alert("Please Enter a Value for pay increase");
       goodSal=false;
     }
     if(goodSal && goodSub)
     {
        this.tutorService.increaseSalaryBySubject(this.ftbsResponse.bind(this), salary, subject); 
      }
      
  }
  
  ftbsResponse(res: Observable<any[]>) 
  {
    this.response = res;
    console.log(res);
    if(res["message"].affectedRows==0)
    {
      alert("Cannot increase pay for tutors");
    }
    alert(res["message"]);
    this.router.navigateByUrl('home');
  }
  goToHome()
  {
    this.router.navigateByUrl('home');
  }
}
