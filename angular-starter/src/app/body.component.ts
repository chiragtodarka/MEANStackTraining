import {Component} from '@angular/core';
import {CourseService} from './course.service'

@Component({
    moduleId: module.id,
    selector:'my-body',
    templateUrl: './body.component.html'

   

})
export class BodyComponent{

   courses;
   title: string="title string";

   imageurl = "http://lorempixel.com/400/200";

   constructor(cs:CourseService){
       this.courses=cs.getCourses();
   }
   
isActive = false;   

afterclick($event)
{
    console.log("afterclick called", $event)
}

isFavorite = false;

onClick()
{
    this.isFavorite = !this.isFavorite
}

}