import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FEATURE_NAME, reducers } from './states';
import { AuthEffects } from './states/effects/auth.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(FEATURE_NAME, reducers),
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class AuthModule {}
