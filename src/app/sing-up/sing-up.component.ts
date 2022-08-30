import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  signForm !: FormGroup;

  constructor(private formBuilder:FormBuilder , private _http:HttpClient , private router:Router) { }

  ngOnInit(): void {
    this.signForm = this.formBuilder.group({
      name:[''],
      email:[''],
      mobile:[''],
      password:['']
    })
  }

  signUp(){
    this._http.post<any>("http://localhost:3000/signup", this.signForm.value).subscribe(res => {
      alert("User SignUp Successfully");
      this.signForm.reset();
      this.router.navigate(['login']);
    }
    
    )
  

  }

}
