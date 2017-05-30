import {Injectable} from '@angular/core'

@Injectable()

export class CourseService
{
    getCourses(): string[]
    {
        return ["Java", "C++", "C"]
    }
}