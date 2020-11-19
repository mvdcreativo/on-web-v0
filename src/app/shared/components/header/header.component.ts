import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  formSearch : FormGroup;
  

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    
    this.formSearch = this.fb.group({
      search: [null,Validators.required]
    })
   }

  ngOnInit(): void {
  }

  onSubmitSearch(){
    const search = this.formSearch.get('search').value
    this.router.navigate(['cursos/buscar/cursos', search ])
  }
}
