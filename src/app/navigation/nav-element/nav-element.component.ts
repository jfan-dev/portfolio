import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-element',
  templateUrl: './nav-element.component.html',
  styleUrls: ['./nav-element.component.css']
})
export class NavElementComponent {

  @Input()
  btnTxt:string = "";
  btnLink:string = "";

}
