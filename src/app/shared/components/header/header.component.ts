import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  form : FormGroup;
  

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    
    this.form = this.fb.group({
      search: [null]
    })
   }

  ngOnInit(): void {
  }

  onSubmitSearch(){
    const search = this.form.get('search').value
    this.router.navigate(['/buscar/cursos', search ])
  }
}
