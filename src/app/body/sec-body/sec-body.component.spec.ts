import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecBodyComponent } from './sec-body.component';

describe('SecBodyComponent', () => {
  let component: SecBodyComponent;
  let fixture: ComponentFixture<SecBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
