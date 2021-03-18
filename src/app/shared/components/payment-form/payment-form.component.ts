import { Component, OnInit, ChangeDetectionStrategy, Output, OnDestroy, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from 'src/app/auth/interfaces/user';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentFormComponent implements OnInit, OnDestroy {
  @Input() user:User;
  @Output() changes : EventEmitter<any> = new EventEmitter

  form: FormGroup;
  
  subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,

  ) { 
    
    this.createForm()
    
  }

  ngOnInit(): void {
    if (this.user) {
      this.updateForm()
    }
  }

  createForm() {
    console.log(this.user);
    
    this.form = this.fb.group({
      name: ["", Validators.required],
      last_name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      n_doc_iden: ["", Validators.required],
      type_doc_iden: ['CI', Validators.required],
      address_one: ["", Validators.required],
      phone_one: ["", Validators.required],
    })
    this.emitChanges()

  }


  updateForm(){
    this.form.setValue({
      name: this.user?.name,
      last_name: this.user?.last_name,
      email: this.user?.email,
      n_doc_iden: this.user?.account?.n_doc_iden,
      type_doc_iden: 'CI',
      address_one: this.user?.account?.address_one,
      phone_one: this.user?.account?.phone_one,
    })
  }

  ngOnDestroy() {
    this.subscriptions.map(v => v.unsubscribe())
  }


  emitChanges() {
    this.subscriptions.push(
      this.form.valueChanges.subscribe(next => this.changes.emit(this.form))
    )
  }
}
