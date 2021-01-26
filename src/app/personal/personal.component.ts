import { Component, OnInit } from '@angular/core';
import { JSONService } from '../json.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  showMe:string=''
  intrest:any[]
  myinfo:any
  education:any[]
  constructor(private json:JSONService) {
    this.intrest=this.json.intrest
    this.myinfo=this.json.myinfo
    this.education=this.json.education
    setTimeout(() => {
      this.showMe=this.myinfo.aboutme;
 }, 3250)
   }

  ngOnInit(): void {
  }

}
