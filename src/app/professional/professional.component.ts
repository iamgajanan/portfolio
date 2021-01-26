import { Component, OnInit } from '@angular/core';
import { JSONService } from '../json.service';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {
workexp:any[]
projects:any[]
skills:any[]
  constructor(private json:JSONService) { 
    this.workexp=this.json.workExperience
    this.projects=this.json.Personal_projects
    this.skills=this.json.skills
  }

  ngOnInit(): void {
  }

}
