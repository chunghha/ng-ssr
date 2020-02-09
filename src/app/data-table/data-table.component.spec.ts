
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppMaterialModule } from '../app.material.module';
import { DataTableComponent } from './data-table.component';

describe('DataTableComponent', () => {
  let component: DataTableComponent;
  let fixture: ComponentFixture<DataTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableComponent ],
      imports: [
        BrowserAnimationsModule,
        AppMaterialModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
