import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Instructor } from './interfaces/instructor';
import { InstructorService } from './services/instructor.service';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.scss']
})
export class InstructorsComponent implements OnInit {
  
  instructors: Observable<Instructor[]>;

  constructor(
    private instructorService: InstructorService
  ) { }

  ngOnInit(): void {

    this.instructors = this.instructorService.getInstructors(1,100).pipe(map(v=>v.data.data))
  }

}
