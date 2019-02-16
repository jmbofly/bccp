import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [],
  imports: [
    AngularFireModule.initializeApp(environment.config),
    AngularFireAuthModule,
    AngularFirestoreModule,
    SharedModule,
  ],
  exports: [AngularFireModule, AngularFireAuthModule, AngularFirestoreModule],
  providers: [AuthService],
})
export class CoreModule {}
