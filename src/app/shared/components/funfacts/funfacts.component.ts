import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserInstructor } from 'src/app/interfaces/course';
import { FunfactsService } from './services/funfacts.service';

@Component({
  selector: 'app-funfacts',
  templateUrl: './funfacts.component.html',
  styleUrls: ['./funfacts.component.scss']
})
export class FunfactsComponent implements OnInit {

  totalInstructors: Observable<number>;
  totalCourses: Observable<number>;

  constructor(
    private funfactsService: FunfactsService
  ) { }

  ngOnInit(): void {
    this.getUsers()
    this.getCourses()
  }


  getUsers(){
    this.totalInstructors = this.funfactsService.getUsers().pipe(map(
      v=> {
        let instructors =  v.data.filter( x => x.role_id === 1 )
        // console.log(instructors.length);
        return  instructors.length
      }
    ))
    
  }

  getCourses(){
    this.totalCourses = this.funfactsService.getCourses().pipe(map(
      v=> {
        let courses =  v.data
        // console.log(courses.length);
        
        return  courses.length
      }
    ))
    
  }
}
