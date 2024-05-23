import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreOppComponent } from './more-opp.component';

describe('MoreOppComponent', () => {
  let component: MoreOppComponent;
  let fixture: ComponentFixture<MoreOppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoreOppComponent]
    });
    fixture = TestBed.createComponent(MoreOppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
