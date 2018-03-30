import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiLinksComponent } from './api-links.component';

describe('ApiLinksComponent', () => {
  let component: ApiLinksComponent;
  let fixture: ComponentFixture<ApiLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
