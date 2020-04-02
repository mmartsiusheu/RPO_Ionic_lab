import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductCreateFormPage } from './product-create-form.page';

describe('ProductCreateFormPage', () => {
  let component: ProductCreateFormPage;
  let fixture: ComponentFixture<ProductCreateFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCreateFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCreateFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
