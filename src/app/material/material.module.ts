import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatProgressSpinnerModule, MatCheckboxModule, MatSelectModule, MatOptionModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatSelectModule,
    MatOptionModule,
    [BrowserModule, BrowserAnimationsModule,]
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatSelectModule,
    MatOptionModule,
    [BrowserModule, BrowserAnimationsModule,]
  ]
})
export class MaterialModule {}