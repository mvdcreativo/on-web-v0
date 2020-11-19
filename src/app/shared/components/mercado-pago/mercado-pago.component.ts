import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mercado-pago',
  templateUrl: './mercado-pago.component.html',
  styleUrls: ['./mercado-pago.component.scss']
})
export class MercadoPagoComponent implements OnInit {

  form : FormGroup;

  constructor(
    private fb: FormBuilder
  ) { 
    // dow.Mercadopago.setPublishableKey("TEST-8527684655596903-111119-c6819c11641916a2f1c2601dbf17d6d7-52860419Y");
  }

  ngOnInit(): void {
  
  
}

  createForm(){
    this.form = this.fb.group({
      email: [null],
      docType: [null],
      docNumber: [null],
      issuer: [null],
      installments: [null],
      transactionAmount: [null],
      paymentMethodId: [null],
      description: [null],
 
      
    })
  }
}
