import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule  } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule  } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';


import { FormsModule } from '@angular/forms';

@NgModule ({

imports: [MatButtonModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  BrowserAnimationsModule,
  MatSliderModule,
  CommonModule,
  BrowserModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
MatTabsModule],
exports: [MatButtonModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  BrowserAnimationsModule,
  MatSliderModule,
  CommonModule,
  BrowserModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
MatTabsModule,
FormsModule ]
})

export class MaterialModule{}
