import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-card',
  templateUrl: './link-card.component.html',
  styleUrls: ['./link-card.component.css']
})
export class LinkCardComponent {

  @Input() linkTitle:string =''

  @Input() linkImage:string =''
  
  @Input() linkSrc:string =''
  
}
