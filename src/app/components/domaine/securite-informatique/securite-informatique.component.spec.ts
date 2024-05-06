import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuriteInformatiqueComponent } from './securite-informatique.component';

describe('SecuriteInformatiqueComponent', () => {
  let component: SecuriteInformatiqueComponent;
  let fixture: ComponentFixture<SecuriteInformatiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecuriteInformatiqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecuriteInformatiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
