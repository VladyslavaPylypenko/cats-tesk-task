import { Component, OnInit } from '@angular/core';
import { CatsService } from '../../services/cats.service';
import { ICat, IBreed } from '../../../../interfaces/cat.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import {combineLatest, Observable} from 'rxjs';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-cats-page',
  templateUrl: './cats-page.component.html',
  styleUrls: ['./cats-page.component.scss']
})
export class CatsPageComponent implements OnInit {
  isLoading = true;
  catList!: ICat[];
  breedList!: IBreed[];
  catsForm!: FormGroup;

  constructor(
    private catsService: CatsService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.loadCatsData();
  }

  private initializeForm(): void {
    this.catsForm = this.formBuilder.group({
      selectedBreed: [''],
      selectedCount: ['10']
    });

    this.catsForm.valueChanges.subscribe(() => {
      this.onCatsFormValuesChanged();
    });
  }

  private loadCatsData(): void {
    combineLatest([this.getCatList(), this.getBreedList()]).subscribe(() => {
      this.isLoading = false;
    });
  }

  private getBreedList(): Observable<IBreed[]> {
    return this.catsService.getBreeds().pipe(
      tap(breeds => {
        this.breedList = breeds;
      })
    );
  }

  private getCatList(selectedBreed?: string): Observable<ICat[]> {
    const selectedCount = this.catsForm.get('selectedCount')?.value;
    let catList$: Observable<ICat[]>;

    if (selectedBreed) {
      catList$ = this.catsService.getCatsByBreed(selectedBreed, selectedCount);
    } else {
      catList$ = this.catsService.getAllCats(selectedCount);
    }

    return catList$.pipe(
      tap(cats => {
        this.catList = cats;
      })
    );
  }

  onCatsFormValuesChanged(): void {
    this.isLoading = true;
    const selectedBreed = this.catsForm.get('selectedBreed')?.value;
    this.getCatList(selectedBreed).subscribe(() => {
      this.isLoading = false;
    });
  }
}
