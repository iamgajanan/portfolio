import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JSONService {
  intrest=["Movies","Reading","Listening Music","Writing Blogs"]
  myinfo={
    "name": "Hello My name is Gajanan Shinde",
    "designation":"I'm Software developer",
    "aboutme":"Enthusiastic technical professional with complete understanding of entire software development lifecycle. Known for having talents in Frontend as well as Backend"
    }
    education=[{
      "degree":"Master of Engineering",
      "college":"Pimpri-Chinchwad College of Engineering",
      "stream":"Information Technology"
    },{
      "degree":"Bachlor of Engineering",
      "college":"Anuradha Engineering College",
      "stream":"Electronics and Tele-Communication"

    }]
    workExperience=[{
      "company":"Creaxt Innovations Pvt. Ltd.",
      "designation":"FRONT-END DEVELOPER",
      "description":"Working From Scratch on Product on School management System.My job is to design and develop the website for school and admin for muse Solution (Product) using Angular 7 and django to create api.I also works on firebase Auth, db and Storage. My second project is on Product on Preschool Search engine for Parents and getting leads to Principal. The Framework we are using here is Angular 10."
    },{
      "company":"JustBe TechSoft Pvt. Ltd.",
      "designation":"INTERN",
      "description":"Worked on company product is 1louve.com. This product works as a Sports Domain. Worked on rewriting 1Louve.com website in Angular 6."
    }]
    Personal_projects=[
    {"name":"Employee list using Angular 7 and JSON-server (09/2018)","link":"https://github.com/iamgajanan/EmployeeList"},
    {"name":"Django-MongoDB-API-creation (08/2019)","link":"https://github.com/iamgajanan/Django-MongoDB-API-creation"},
    {"name":"Django-MongoDB using Serializer (09/2019)","link":"https://github.com/iamgajanan/Serializer-Django-MongoCompass-CRUD-backend-"},
    {"name":"Employee List using Firebase (01/2020)","link":"https://github.com/iamgajanan/EmployeeListFirebase"},
    {"name":"Firebase Push notification in Angular 9 (02/2020)","link":"https://github.com/iamgajanan/Angular-9-Firebase-Push-Notification"},
    {"name":"Upload File in AWS S3 bucket using Angular 9(04/2020)","link":"https://github.com/iamgajanan/upload-file-in-AWS-using-Angular-9"},
    ]
    skills=["Angular 7",'AWS S3','AWS EC2',"MongoDB","Firebase","Basic React JS","Basic Django","HTML","JavaScript","Python","NodeJS"]
  constructor() { }
 
}
