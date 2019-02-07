import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';

@NgModule({
  declarations: [AuthDialogComponent],
  imports: [CommonModule, MaterialModule],
  exports: [CommonModule, MaterialModule, AuthDialogComponent],
  entryComponents: [AuthDialogComponent],
})
export class SharedModule {}
