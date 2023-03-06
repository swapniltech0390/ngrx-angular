import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromProducts from './store/products.reducer';
import { HomeComponent } from './components/home/home.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductEffects } from './store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    StoreModule.forFeature(fromProducts.productFeatureKey, fromProducts.productReducer),
    EffectsModule.forFeature([ProductEffects]),
  ],
})
export class ProductsModule {}
