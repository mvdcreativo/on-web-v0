import { Component, OnInit, ChangeDetectionStrategy, Output, OnDestroy, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/interfaces/user';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentFormComponent implements OnInit, OnDestroy {

  @Output() changes : EventEmitter<any> = new EventEmitter

  form: FormGroup;
  subcriptions: Subscription[] = [];
  user: User;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { 
    
    this.createForm()
  }

  ngOnInit(): void {
    

  }

  createForm() {
    this.form = this.fb.group({
      name: [null, Validators.required],
      last_name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      n_doc_iden: [null, Validators.required],
      type_doc_iden: ['C.I', Validators.required],
      address_one: [null, Validators.required],
      phone_one: [null, Validators.required],

    })
    this.emitChanges() 

  }

  ngOnDestroy() {
    this.subcriptions.map(v => v.unsubscribe())
  }


  emitChanges() {
    this.subcriptions.push(
      this.form.valueChanges.subscribe(next => this.changes.emit(this.form))
    )
  }
}
