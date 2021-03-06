"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var course_service_1 = require('./course.service');
var BodyComponent = (function () {
    function BodyComponent(cs) {
        this.title = "title string";
        this.imageurl = "http://lorempixel.com/400/200";
        this.isActive = false;
        this.isFavorite = false;
        this.courses = cs.getCourses();
    }
    BodyComponent.prototype.afterclick = function ($event) {
        console.log("afterclick called", $event);
    };
    BodyComponent.prototype.onClick = function () {
        this.isFavorite = !this.isFavorite;
    };
    BodyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-body',
            templateUrl: './body.component.html'
        }), 
        __metadata('design:paramtypes', [course_service_1.CourseService])
    ], BodyComponent);
    return BodyComponent;
}());
exports.BodyComponent = BodyComponent;
//# sourceMappingURL=../../app/body.component.js.map