import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { BccpSliderComponent } from './bccp-slider/bccp-slider.component';
import { BccpHoverDirective } from './bccp-hover.directive';

@NgModule({
  declarations: [BccpSliderComponent, BccpHoverDirective],
  imports: [CommonModule, MaterialModule, SlickCarouselModule],
  exports: [CommonModule, MaterialModule, BccpSliderComponent],
  entryComponents: [BccpSliderComponent],
})
export class SharedModule {}
