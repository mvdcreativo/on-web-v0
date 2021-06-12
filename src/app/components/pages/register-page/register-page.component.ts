import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'ngx-custom-validators';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { UsersService } from 'src/app/auth/users.service';
import { SeoService } from 'src/app/shared/seo/services/seo.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit, OnDestroy {
  subscription: Subscription = null;
  public error$ : Observable<any> ;
  emailsExists: any[] = [];

  constructor(
    private authService: AuthService,
    private fb:FormBuilder,
    private router:Router,
    private userService: UsersService,
    private seoService: SeoService
  ) { 
    this.setSeo()
    this.emailExistValidation()
    
    this.error$ = this.authService.error$

  }

  ngOnInit(): void {

  }

  form: FormGroup
  createForm(){
    this.form = this.fb.group({
      name:["", Validators.required],
      last_name:["", Validators.required],
      email:["", [Validators.required, CustomValidators.email, CustomValidators.notIncludedIn(this.emailsExists)]],
      password:["", Validators.required],
      password_confirmation: ["", [Validators.required]]
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


  emailExistValidation():void{
    
    this.userService.getUsers(1,10000).pipe(map(v=>v.data.data.map(x=> x.email))).subscribe(res=>{

        this.emailsExists = res

      this.createForm()
      if(this.form){
        this.form.get('password_confirmation').setValidators([CustomValidators.equalTo(this.form.get('password'))])
      }
      console.log(this.emailsExists);
      
    } )
    
  }

  getErrorMessage(validator){
    let message
    switch (validator) {
      case 'notIncludedIn':{
        message = "El email ya existe"
        break;
      }
      case 'email':{
        message = "Email no válido"
        break;
      }      
      case 'date':{
        message = "Formato de fecha inválido"
        break;
      }      
      case 'number':{
        message = "Solo números"
        break;
      }      
      case 'required':{
        message = "Campo requerido"
        break;
      }  

      case 'equalTo':{
        message = "Las contraseñas no son iguales "
        break;
      }      
      default:
        message = "No válido"
        break;
    }

    return message
  }

  setSeo() {
    //////seo/////  

    this.seoService.genrateTags({

      title: `Registro`,
      description: `Créate una cuenta AHORA!`,
      slug: `/registro`,

    })
    ////////////
  }
}
