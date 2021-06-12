import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SeoService } from 'src/app/shared/seo/services/seo.service';
import { Instructor } from './interfaces/instructor';
import { InstructorService } from './services/instructor.service';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.scss']
})
export class InstructorsComponent implements OnInit {
  
  instructors: Observable<Instructor[]>;
  docentesConcat: string=null;

  constructor(
    private instructorService: InstructorService,
    private seoService:SeoService
  ) { }

  ngOnInit(): void {

    this.instructors = this.instructorService.getInstructors(1,100).pipe(map(v=>{
      const docentesArr = v.data.data;
      this.docentesConcat = docentesArr.map(x=>x.name+" "+x.last_name).join(',')
      this.setSeo()
      return v.data.data
    }))
  }


  setSeo() {
    //////seo/////  
    if(this.docentesConcat){
      this.seoService.genrateTags({
  
        title: `Docentes`,
        description: `Nuestros docentes: ${this.docentesConcat}`,
        slug: `/docentes`,
      })
    }
    ////////////
  }
}
