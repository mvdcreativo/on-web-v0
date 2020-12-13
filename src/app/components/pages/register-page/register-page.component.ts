import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit, OnDestroy {
  subscription: Subscription = null;
  public error$ : Observable<any> ;

  constructor(
    private authService: AuthService,
    private fb:FormBuilder,
    private router:Router
  ) { 
    this.createForm()
    this.error$ = this.authService.error$

  }

  ngOnInit(): void {

  }

  form: FormGroup
  createForm(){
    this.form = this.fb.group({
      name:[null, Validators.required],
      last_name:[null, Validators.required],
      email:[null, [Validators.required, Validators.email]],
      password:[null, Validators.required],
      password_confirmation: [null, Validators.required]
    })
  }


  onSubmit(){
    this.subscription = this.authService.register(this.form.value).subscribe(
      res=> this.router.navigate(['/']),

    )
  }
  ngOnDestroy(){
    if (this.subscription) {
      
      this.subscription.unsubscribe()
    }
  }
}
