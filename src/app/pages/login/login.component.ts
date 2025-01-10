import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isLoginView: boolean = true;

  userRegisterObj: any = {
    userName:'',
    password:'',
    emailId:''
  }

  userLoginObj: any = {
    userName:'',
    password:'',
  }

  router = inject(Router);

  onLogin() {
    const isLocalData = localStorage.getItem('angular18Local');
    if(isLocalData != null){
      const users = JSON.parse(isLocalData);

      const isUserFound = users.find((m: any) => m.userName ==this.userLoginObj.userName && m.password == this.userLoginObj.password);
      if(isUserFound != undefined){
        this.router.navigateByUrl('dashboard');
      } else {
        alert("User name or password is Wrong");
      }
    } else {
      alert("No User Found");
    }
  }

  onRegister(){
    const isLocalData = localStorage.getItem('angular18Local');
    if(isLocalData != null){
      const localArray = JSON.parse(isLocalData);
      localArray.push(this.userRegisterObj);
      localStorage.setItem("angular18Local",JSON.stringify(localArray));
    } else {
      const localArray = [];
      localArray.push(this.userRegisterObj);
      localStorage.setItem("angular18Local",JSON.stringify(localArray));
    }
    alert("Registration Success!");
  }


}
