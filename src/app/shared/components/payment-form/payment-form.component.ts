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
    
    
  }

  ngOnInit(): void {
    if (this.user) {
      
      this.createForm()
    }
  }

  createForm() {
    console.log(this.user);
    
    this.form = this.fb.group({
      name: [this.user?.name, Validators.required],
      last_name: [this.user?.last_name, Validators.required],
      email: [this.user?.email, [Validators.required, Validators.email]],
      n_doc_iden: [this.user?.account?.n_doc_iden, Validators.required],
      type_doc_iden: ['CI', Validators.required],
      address_one: [this.user?.account?.address_one, Validators.required],
      phone_one: [this.user?.account?.phone_one, Validators.required],
    })
    this.emitChanges() 

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
