import { Injectable, ElementRef } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, isObservable } from 'rxjs';
import { Course, Category } from '../interfaces/course';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StylesService {
  
  private mainColorSubject$: BehaviorSubject<string> = new BehaviorSubject(null);
  public mainColor$: Observable<string>
  private colorDefault: string = '';



  constructor(
  ) { 
    this.mainColor$ = this.mainColorSubject$;
  }

  public setMainColor(color?:string){
    if (color) {
      this.mainColorSubject$.next(color)      
    } else {
      this.mainColorSubject$.next(this.colorDefault)
    }
    // color ? this.mainColorSubject$.next(color): this.mainColorSubject$.next(this.colorDefault)
  }


  public getColorCtegory(param: Observable<any>){
  
    return param.pipe(take(1)).subscribe(
      (param) => {
        console.log(param);
        
        if('categories' in param){
          let color = param.categories[0].color;
          this.setMainColor(color)
        }
        if('courses' in param){
          let color = param.color;
          this.setMainColor(color)
        }

      }
    )
  }
    


    
    // if(isCourse === true){
    //   param.pipe(map( c => c.categories[0].color),take(1))
    //       .subscribe( color => this.setMainColor(color))
    // }
    // if(isCategory){
    //   param.pipe(map( c => c.color),take(1))
    //       .subscribe( color => this.setMainColor(color))
    // }
    



}
