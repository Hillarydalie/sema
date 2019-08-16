import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemaManenoComponent } from './sema-maneno.component';

describe('SemaManenoComponent', () => {
  let component: SemaManenoComponent;
  let fixture: ComponentFixture<SemaManenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemaManenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemaManenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
