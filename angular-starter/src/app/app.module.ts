import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
 import {WelcomeComponent} from './app.component' ;
 import {MyComponent} from './myapp.component' ;
 import {HeaderComponent} from './header.component' ;
 import {BodyComponent} from './body.component' ;
 import {FooterComponent} from './footer.component' ;
 import {CourseService} from './course.service'
 
  

@NgModule({
  declarations: [
     WelcomeComponent, MyComponent, HeaderComponent, BodyComponent, FooterComponent
   ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
 
  bootstrap:  [ MyComponent  ],
  providers: [ CourseService ]
   
})
export class AppModule {}
