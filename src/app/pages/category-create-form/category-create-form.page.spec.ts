import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoryCreateFormPage } from './category-create-form.page';

describe('CategoryCreateFormPage', () => {
  let component: CategoryCreateFormPage;
  let fixture: ComponentFixture<CategoryCreateFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryCreateFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryCreateFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
