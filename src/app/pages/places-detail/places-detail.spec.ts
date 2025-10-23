import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesDetail } from './places-detail';

describe('PlacesDetail', () => {
  let component: PlacesDetail;
  let fixture: ComponentFixture<PlacesDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlacesDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacesDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
