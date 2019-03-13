import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TutorServiceService {

  constructor(private router: Router, private http: HttpClient) { 
    
  }
  
  //done
  findTutorBySubject(subjectName,callback_fun) {
    console.log("looking for "+subjectName);
    this.http.get('https://se3309-project-yallahha.c9users.io:8081/api/subjects/'+subjectName).subscribe(data => {
      if(data.length>1)
      {
        console.log(JSON.stringify(data));
        callback_fun(data);
      }
      else
      {
        alert("cannot find:" + subjectName);
      }});
  }
  
  AddTutor(callback_fun, tpass: string, fname: string , lname : string, temail : string, tgender: string, tdob:string, tphoneNumber: string, tCourseCode: string, tRating: number){
  this.http.post('https://se3309-project-yallahha.c9users.io:8081/api/edit', {password: tpass, firstName: fname, lastName: lname, email : temail, gender: tgender, dob: tdob, type: "TUTOR", phoneNumber: tphoneNumber, courseCode: tCourseCode, rating: tRating}).subscribe(data => {
          console.log(data);
         callback_fun(data);
      },
      error=>{
        console.log(error);
        alert("Cannot search:"+ subjectName);
      });
  }
  
  findCheapestTutorBySubject(callback,subjectName:string)
  {
    this.http.get('https://se3309-project-yallahha.c9users.io:8081/api/tutor/' + subjectName).subscribe(data => {
        console.log(data);
         callback(data);
      },
      error=>{
        console.log(error);
        alert("Cannot search:"+ subjectName);
      }
      
      );
  
    
  }
  
  findStudentsByTutorsSubject(callback,tutorId:number, tsubject: string)
  {
    this.http.get('https://se3309-project-yallahha.c9users.io:8081/api/students/' + tsubject + '?tutor_id=' + tutorId,{}).subscribe(data => {
      if(data)
      {
        console.log(JSON.stringify(data));
        callback(data);
      }
      else
      {
        alert("cannot find:" + tutorId);
      }});
  }
  
  //Done
  increaseSalaryBySubject(callback_fun, tsalary: number, tsubject: string){
    
  this.http.put('https://se3309-project-yallahha.c9users.io:8081/api/subjects/'+ tsubject+"?salary='"+tsalary+"'",{salary:tsalary}).subscribe(data => {
      callback_fun(data);
      
  });
}
  
  //Done
  logoutOfDatabase(callback)
  {
    this.http.get('https://se3309-project-yallahha.c9users.io:8081/api/logout').subscribe(data => {
          console.log(data);
         callback(data);
      });
  }
  
  
}
