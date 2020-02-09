import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule
  ],
})
export class AppMaterialModule { }
