import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInterfaceComponent } from './contact-interface.component';

describe('ContactInterfaceComponent', () => {
  let component: ContactInterfaceComponent;
  let fixture: ComponentFixture<ContactInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactInterfaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
