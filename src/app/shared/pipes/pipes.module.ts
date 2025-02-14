import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcatValuesPipe } from './concat-values.pipe';
import { SortByPipe } from './sort-by.pipe';

@NgModule({
  declarations: [ConcatValuesPipe, SortByPipe],
  exports: [ConcatValuesPipe, SortByPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
