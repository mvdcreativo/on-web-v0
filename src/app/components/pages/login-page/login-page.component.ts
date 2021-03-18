import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { NewPassDilogComponent } from 'src/app/auth/access/new-pass-dilog/new-pass-dilog.component';
import { ResetPassDielogComponent } from 'src/app/auth/access/reset-pass-dielog/reset-pass-dielog.component';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public formLogin: FormGroup;
  returnUrl: string;
  public error$: Observable<any>;


  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    public dialog: MatDialog

  ) {
    this.createForm()
    this.error$ = this.authService.error$
  }

  ngOnInit(): void {


    this.activateRoute.queryParamMap.subscribe(
      // data => this.returnUrl = data.get('returnUrl')
      data => {
        this.returnUrl = data.get('returnUrl')

        if (data.get('email') && data.get('token')) {
          this.openNewPassDialog(data)
        }
        if (data.get('error')) {
          // console.log(data.get('error'));
          const error = data.get('error')

          let message, status;
          message = error;
          status = 'error';
          // this.authService.snackBar.open(message, '×', { panelClass: [status], verticalPosition: 'top', duration: 5000 });
        }
      }
    );



    // reset login status
    // this.reLogout();
  }

  createForm() {
    this.formLogin = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    })
  }


  onSubmit() {
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
        }

      );
  }


  reLogout() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      this.authService.logout()
    }

  }

  /////LOGIN SOCIAL
  signInWithGoogle(): void {
    this.authService.signInWithGoogle().then(
      data => {
        // console.log(data);
        if (this.returnUrl) {
          this.router.navigate([this.returnUrl]);
        } else {
          this.router.navigate(['/']);
        }
      }
    )

  }

  signInWithFB(): void {
    this.authService.signInWithFB().then(
      data => {
        console.log(data);
        if (this.returnUrl) {
          this.router.navigate([this.returnUrl]);
        } else {
          this.router.navigate(['/']);
        }
      }
    )

  }

  signOut(): void {
    this.authService.signOut();
  }



  ////reset pass

  
  openResetPassDialog(data?): void {
    const dialogRef = this.dialog.open(ResetPassDielogComponent, {
      maxWidth: "500px",
      maxHeight: "100vh",
      data: {data : data}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result){
        this.authService.solicitaResetPass(result)
      }

    });
  }
  

  openNewPassDialog(data?): void {
    const dialogRef = this.dialog.open(NewPassDilogComponent, {
      maxWidth: "500px",
      maxHeight: "100vh",
      data: {data : data}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result){
        this.authService.updatePass(result)
      }

    });
  }

}
