import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username="Ramya";
  public password="ramyaindhu";
  public userval:string='';
  public userpass:string='';
  constructor(private router :Router) { }
  getName(val:string)
  {
    this.userval=val;
  }
  getPass(pas:string)
  {
    this.userpass=pas;
  }
  onCheck()
  {
    if(this.userval=='' && this.userpass=='')
    {
      alert('PLEASE FILL OUT BOTH THE FIELDS!!!');
    }
    else if(this.userval==this.username && this.userpass=='')
    {
      alert('PLEASE FILL OUT THE PASSWORD FIELD!!!');
    }
    else if(this.userval=='' && this.userpass==this.password)
    {
      alert('PLEASE FILL OUT THE USERNAME FIELD!!!');
    }
    else if(this.userval!=this.username && this.userpass==this.password)
    {
      alert('FILL OUT ACCURATE USERNAME!!!');
    }
    else if(this.userval==this.username && this.userpass!=this.password)
    {
      alert('FILL OUT ACCURATE PASSWORD!!!');
    }
    else if(this.userval!=this.username && this.userpass!=this.password)
    {
      alert('FILL OUT ACCURATE USERNAME AND PASSWORD!!!');
    }
    else if(this.userval==this.username && this.userpass==this.password)
    {
      alert('DIRECTING YOU TO DASHBOARD');
      this.router.navigate(['/dash']);
      
    }
  }
  ngOnInit(): void {
    document.body.className = "selector";
  }

}


   

/*
<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>
    Aww yeah, you successfully read this important alert message. This example text is going
    to run a bit longer so that you can see how spacing within an alert works with this kind
    of content.
  </p>
  <hr />
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
*/