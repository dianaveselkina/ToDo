import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Serch } from './serch';

describe('Serch', () => {
  let component: Serch;
  let fixture: ComponentFixture<Serch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Serch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Serch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
