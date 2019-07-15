import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitBarComponent } from './git-bar.component';

describe('GitBarComponent', () => {
  let component: GitBarComponent;
  let fixture: ComponentFixture<GitBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
