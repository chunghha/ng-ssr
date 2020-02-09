import { AfterViewChecked, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { untilDestroyed } from 'ngx-take-until-destroy';

import { Element } from './element.interface';
import { ElementService } from './element.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements AfterViewChecked, OnDestroy, OnInit {
  elements: Element[];
  loading = true;

  displayedColumns = ['id', 'name'];
  dataSource: MatTableDataSource<Element>;
  length = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private elementService: ElementService) {}

  ngOnInit() {
    this.elementService.getElements().pipe(untilDestroyed(this))
      .subscribe(res => {
        this.elements = <Element[]>res;
        this.dataSource = new MatTableDataSource<Element>(
          this.elements
        );
        this.length = this.elements.length;
        this.loading = false;
      });
  }

  ngAfterViewChecked() {
    if (this.dataSource && this.dataSource.paginator === undefined) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  ngOnDestroy() {}
}
