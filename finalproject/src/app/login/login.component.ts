import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router:Router) { }
  
  userLogin(usernmae: string, password:string){
    if(usernmae == "admin" && password == "admin"){
    this._router.navigateByUrl('home');
    }
    else{
      alert("Wrong Credentials");
    }
  }
  ngOnInit() {
    
  }

}
