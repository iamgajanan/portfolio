import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
   showMe:string=''
   
  constructor() {
    setTimeout(() => {
      this.showMe = 'Enthusiastic technical professional with complete understanding of entire software development lifecycle. Known for having talents in Frontend as well as Backend';
 }, 3250)
   }

  ngOnInit(): void {
  }

}
