import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-tag',
  templateUrl: './skill-tag.component.html',
  styleUrls: ['./skill-tag.component.css']
})
export class SkillTagComponent {

@Input() expertiseIcon:string = ""

@Input() expertiseName:string = ""

@Input() expertiseLink:string = ""

}
