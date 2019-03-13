import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NewTutorComponent } from './new-tutor/new-tutor.component';
import { SortComponent } from './sort/sort.component';
import { StudentsComponent } from './students/students.component';
import { SalaryComponent } from './salary/salary.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    NewTutorComponent,
    SortComponent,
    StudentsComponent,
    SalaryComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
      {
      path: 'home',
      component: HomepageComponent
      },
      {
        path: 'newTutor',
        component: NewTutorComponent
      }, 
      {
        path: 'sort',
        component: SortComponent
      }, 
      {
        path: 'students',
        component: StudentsComponent
      }, 
      {
        path: 'salary',
        component: SalaryComponent
      }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
