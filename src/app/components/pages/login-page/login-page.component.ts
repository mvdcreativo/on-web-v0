import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public formLogin: FormGroup;
  returnUrl: string;
  public error = '';

  constructor(
    private fb: FormBuilder,
    private authService : AuthService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { 
    this.createForm()
  }

  ngOnInit(): void {


    this.activateRoute.queryParamMap.subscribe(
      data => this.returnUrl = data.get('returnUrl')
    );
    // reset login status
    // this.reLogout();
  }

  createForm(){
    this.formLogin = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [ null, Validators.required]
    })
  }


  onSubmit(){
    const credentials = this.formLogin.value;
    this.authService.login(credentials)
      .pipe(first())
      .subscribe(
        data => {
          // console.log(data);
          if (this.returnUrl) {
            this.router.navigate([this.returnUrl]);
          } else {
            this.router.navigate(['/']);
          }
        },
        error => {
          this.error = error;
          // this.loading = false;
        }
      );
  }


  reLogout() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      this.authService.logout()
    }

  }


}
