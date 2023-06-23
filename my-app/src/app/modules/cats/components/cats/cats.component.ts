import {Component, Input} from '@angular/core';
import {ICat} from "../../../../interfaces/cat.interface";

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent {
  @Input() catList: ICat[] = [];

  constructor() {}

}
