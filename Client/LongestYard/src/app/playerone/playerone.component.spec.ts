import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayeroneComponent } from './playerone.component';

describe('PlayeroneComponent', () => {
  let component: PlayeroneComponent;
  let fixture: ComponentFixture<PlayeroneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayeroneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayeroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
