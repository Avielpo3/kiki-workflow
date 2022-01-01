import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCore from './+state/core.reducer';
import { CoreEffects } from './+state/core.effects';
import { CoreFacade } from './+state/core.facade';
import { AppAuthService } from './services/app-auth.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromCore.CORE_FEATURE_KEY, fromCore.reducer),
    EffectsModule.forFeature([CoreEffects]),
  ],
  providers: [CoreFacade, AppAuthService],
})
export class AppCoreModule {}
