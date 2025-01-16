import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcatValuesPipe } from './concat-values.pipe';

@NgModule({
  declarations: [ConcatValuesPipe],
  exports: [ConcatValuesPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
