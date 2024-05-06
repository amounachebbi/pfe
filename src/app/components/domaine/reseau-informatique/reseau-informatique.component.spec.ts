import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReseauInformatiqueComponent } from './reseau-informatique.component';

describe('ReseauInformatiqueComponent', () => {
  let component: ReseauInformatiqueComponent;
  let fixture: ComponentFixture<ReseauInformatiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReseauInformatiqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReseauInformatiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
