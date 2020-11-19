import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Fields } from "./interfaces/fields";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { debounce, debounceTime } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';


import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatDialog } from '@angular/material/dialog';
// import { SelectIconsComponent } from '../modals/select-icons/select-icons.component';
// import { IconsService } from '../../services/icons/icons.service';
// import { Icon } from '../modals/select-icons/insterfaces/icon';

@Component({
  selector: 'mvd-dinamic-form',
  templateUrl: './dinamic-form.component.html',
  styleUrls: ['./dinamic-form.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class DinamicFormComponent implements OnInit {

  @Input() fields : Fields[] = null
  @Output() value : EventEmitter<any> = new EventEmitter

  subscription: Subscription
  colorField: Fields[];
  // icons: Observable<Icon[]>;
  messageUpload: string = null;
  imgPreview: string | ArrayBuffer;


  constructor(
    private fb:FormBuilder,
    public dialog: MatDialog,
    // private iconsService: IconsService
  ) { 
    this.form = this.fb.group({})
  }
  
  colorPreview
  public form : FormGroup

  ngOnInit(): void {
    this.buildForm()
    console.log(this.fields);


    this.form.valueChanges.pipe( debounceTime(500) ).subscribe(
      change => {
        console.log(this.form.value);
        
        this.value.emit(this.form.value)
      }
    )
    
    
  }


  changeForm(value){
    // console.log(value);
    
          this.value.emit(value)

  }

  private buildForm(){
    
    if (this.fields) {
      const controls = this.fields.map(
        v => {
          if(v.type === 'image' && v.value){
            this.imgPreview = v.value
          }
          return this.form.addControl( v.nameControl , this.fb.control(v.value ?? "", v.validators));
        }
      )
      

      const fieldColorControl =  this.fields.filter(x => x.type === 'color').map(v => v.nameControl);
      
      if(this.form.get(fieldColorControl)){
        this.colorPreview = this.form.get(fieldColorControl).value
        
      } 

      
    // this.icons = this.iconsService.getDataIcons()
    }


  }


  chanhgeColor(){
    
    const fieldColorControl =  this.fields.filter(x => x.type === 'color').map(v => v.nameControl);
    this.form.get(fieldColorControl).patchValue(
      this.colorPreview
    )
    console.log(this.colorPreview);
    
  }



  // selectIco(){
  //   const dialogRef = this.dialog.open(SelectIconsComponent, {
  //     width: '950px',
  //     maxWidth: '100%',
  //     height: '90vh',
  //     data: this.icons
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //     if(result){
  //       const nameControl = this.fields.filter(x => x.type === 'select_ico').map(v => {
  //         v.value = result?.icon_name
  //         return v.nameControl
  //       });
  //       this.form.get(nameControl).patchValue(result.icon_name)
  //       console.log(this.form.value);

  //     }
      
  //   });
  // }



  uploadImage(e){
    console.log(e.target.files);
    if (e?.target?.files[0]) {

      const selectedFile = e.target.files[0];

      var mimeType = selectedFile.type;
      if (mimeType.match(/image\/*/) == null) {
        this.messageUpload = "No es una imágen";
        this.imgPreview = null;
        this.form.get('image').patchValue(null)
        return;
      }

      this.form.get('image').patchValue(selectedFile)
      this.messageUpload = null
      var reader = new FileReader();
        reader.readAsDataURL(selectedFile); 
        reader.onload = (_event) => { 
          this.imgPreview = reader.result; 
      }
      const fileNames = [];
      console.log(selectedFile);

      // console.log(this.files);

      // this.imagesServices.uploadImage(this.data, selectedFiles)
 
    }else{
      const imgExist = this.form.get('image').value
      if (imgExist) {
        this.imgPreview = imgExist
      }else{
        this.imgPreview = null;
        this.form.get('image').patchValue(null)
      }
    }
  }
}
