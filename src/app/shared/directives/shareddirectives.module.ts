import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedcomponentsModule} from '../components/sharedcomponents.module';
import {NumberOnlyDirective} from './numberonly/number-only.directive';
import { LoadingMaskDirective } from './loadingmask/loading-mask.directive';


@NgModule({
  declarations: [NumberOnlyDirective, LoadingMaskDirective],
  imports: [
    CommonModule,
    SharedcomponentsModule
  ],
  exports:[NumberOnlyDirective,LoadingMaskDirective]
})
export class ShareddirectivesModule { }
