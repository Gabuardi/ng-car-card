import {Component, Input} from '@angular/core';

@Component({
  selector: 'car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent {

  @Input() picture: string = ''
  @Input() brand: string = ''
  @Input() model: string = ''
  @Input() year: string = ''
  @Input() price: string = ''

}
