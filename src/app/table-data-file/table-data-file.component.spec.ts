import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDataFileComponent } from './table-data-file.component';

describe('TableDataFileComponent', () => {
  let component: TableDataFileComponent;
  let fixture: ComponentFixture<TableDataFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDataFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableDataFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
