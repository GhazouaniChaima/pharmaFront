import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMedicamentsComponent } from './list-medicaments.component';

describe('ListMedicamentsComponent', () => {
  let component: ListMedicamentsComponent;
  let fixture: ComponentFixture<ListMedicamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMedicamentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMedicamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
