import {Component, Input} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {IBreed} from "../../../../interfaces/cat.interface";

@Component({
  selector: 'app-cats-form',
  templateUrl: './cats-form.component.html',
  styleUrls: ['./cats-form.component.scss']
})
export class CatsFormComponent {
  countOptions = ['5', '10', '15', '20'];
  @Input() catsForm!: FormGroup;
  @Input() breedList: IBreed[] = [];

  constructor() {}

}
