import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.css']
})
export class PortfolioCardComponent {
  
  @Input() isReversed: boolean = true;

  @Input() description: string = "";
  
  @Input() projectNumber: string = "";
  
  @Input() projectName: string = "";
  
  @Input() projectImage: string = "";

  @Input() projectImageAltText: string = "";

}
