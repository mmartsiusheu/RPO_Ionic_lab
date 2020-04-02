import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {CategoryService} from '../../services/category.service';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';
import {Category} from '../../model/category';

@Component({
    selector: 'app-category-create-form',
    templateUrl: './category-create-form.page.html',
    styleUrls: ['./category-create-form.page.scss'],
})
export class CategoryCreateFormPage implements OnInit {

    private categoryForm;

    constructor(private formBuilder: FormBuilder,
                private alertController: AlertController,
                private router: Router,
                private categoryService: CategoryService) {
    }

    ngOnInit() {
        this.categoryForm = this.formBuilder.group({
            categoryName: new FormControl('', Validators.required),
            parentId: new FormControl('', Validators.required)
        });
    }

    actionOnConfirm() {
        this.categoryService.addCategory(this.categoryForm.value)
            .subscribe(async (categoryId: number) => {
                    const alert = await this.alertController.create({
                        header: 'Success',
                        message: 'Category was successfully added',
                        buttons: [{
                            text: 'Ok',
                            handler: () => {
                                const category: Category = this.categoryForm.value as Category;
                                category.id = categoryId;
                                this.categoryService.addCategoryToPipe(category);
                                this.router.navigate(['/categories']);
                            }
                        }]
                    });

                    await alert.present();
                },
                async () => {
                    const alert = await this.alertController.create({
                        header: 'Error!',
                        message: 'Coudn\'t add category',
                        buttons: ['Ok']
                    });

                    await alert.present();
                });
    }

}
