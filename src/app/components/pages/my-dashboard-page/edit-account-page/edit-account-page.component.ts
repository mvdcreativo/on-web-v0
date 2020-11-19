import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/interfaces/user';
import { UsersService } from 'src/app/auth/users.service';
import { OptionSelect } from 'src/app/shared/components/dinamic-form/interfaces/fields';

@Component({
  selector: 'app-edit-account-page',
  templateUrl: './edit-account-page.component.html',
  styleUrls: ['./edit-account-page.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class EditAccountPageComponent implements OnInit {

  userEdit: User;
  subscriptions: Subscription[] = []
  // optionsRoles: OptionSelect[];
  fields;
  urlRequest: any[];
  typesDocIden: { name: string; value: string; }[];

  constructor(
    private activateRouter: ActivatedRoute,
    private router: Router,
    private userService: UsersService,
    private authService: AuthService
    // private roleService: RoleService,

  ) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.authService.currentUser
        .subscribe(res => {
          if (res) {
            this.subscriptions.push(this.userService.getUser(res?.id).subscribe(
              v => {
                this.userEdit = v.data
                console.log(this.userEdit);
                // this.getRoles()
                this.fields = this.setFields()
              })
            )

          }
        })
    )
  }


  ngOnDestroy(): void {
    this.subscriptions.map(v => v.unsubscribe())

  }

  // private getRoles(){
  //   this.subscriptions.push( this.roleService.getRoles().subscribe(
  //     res=> {
  //       this.optionsRoles = res.map(v=> {return {name : v.name, value: v.id}})        
  //       console.log(this.optionsRoles);
  //       this.fields = this.setFields()

  //     }
  //   ) )
  // }


  setFields() {
    // console.log(elementEdit);
    this.typesDocIden = [
      { name: 'CI', value: 'CI' },
      { name: 'Pasaporte', value: 'Pasaporte' }
    ]

    const fields = [
      { nameControl: 'id', type: 'hidden', value: this.userEdit?.id, label: 'Id' },
      // { nameControl: 'password', type: 'hidden', value: 'secret', label: 'Id' },
      { nameControl: 'image', type: 'image', value: this.userEdit?.account?.image, label: 'Imagen', class:"mvd-col1-2" },
      { nameControl: 'name', type: 'text', value: this.userEdit?.name, label: 'Nombre', validators: [Validators.required] , class:"mvd-col2-4"},
      { nameControl: 'last_name', type: 'text', value: this.userEdit?.last_name, label: 'Apellido', validators: [Validators.required], class:"mvd-col4-6" },
      { nameControl: 'type_doc_iden', type: 'select', value: this.userEdit?.account?.type_doc_iden, label: 'Tipo documento de identidad', options: this.typesDocIden, validators: [Validators.required] },
      { nameControl: 'n_doc_iden', type: 'text', value: this.userEdit?.account?.n_doc_iden, label: 'Nº documento', validators: [Validators.required] },
      { nameControl: 'birth', type: 'date', value: moment(this.userEdit?.account?.birth).format('YYYY-MM-DD HH:mm:ss'), label: 'Fecha de nacimiento' },
      { nameControl: 'phone_one', type: 'text', value: this.userEdit?.account?.phone_one, label: 'Teléfono' },
      { nameControl: 'email', type: 'text', value: this.userEdit?.email, label: 'Email', validators: [Validators.required], class:"mvd-col2-4" },
      { nameControl: 'address_one', type: 'text', value: this.userEdit?.account?.address_one, label: 'Dirección', class:"mvd-col4-6" },
      // { nameControl: 'certificated', type: 'text', value: this.userEdit?.account?.certificated, label: 'Profesión/es / Títulos', validators: [Validators.required] },
      // { nameControl: 'n_identification', type: 'text', value: this.userEdit?.account?.n_identification, label: 'Nº funcionario', validators: [Validators.required] },
      // { nameControl: 'phone_two', type: 'text', value: this.userEdit?.account?.phone_two, label: 'Celular', validators: [Validators.required] },
      // { nameControl: 'role_id', type: 'select', value: 2, label: 'Rol en Sistema', options: this.optionsRoles , validators: [Validators.required]},
      // { nameControl: 'bio', type: 'textarea', value: this.userEdit?.account.bio, label: 'Descripción', validators: [Validators.required] },
    ]
    return fields
    // console.log(fields);

  }


  action(e) {
    console.log(e);

    if (e.id) {
      this.updateUser(e)

    } else {
      // this.storeUser(e)
    }
  }


  // storeUser(data){
  //   this.userService.storeUser(data).pipe(take(1)).subscribe(
  //     res=> {
  //         this.router.navigate([`/${this.urlRequest[1]}`])
  //     }
  //   )
  // }

  updateUser(data) {
    this.userService.updateUser(data).pipe(take(1)).subscribe(
      res => {
        // this.router.navigate([`/${this.urlRequest[1]}`])
      }
    )
  }

}
