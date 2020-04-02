import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../../services/category.service';
import {Category} from '../../model/category';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'app-category-details',
    templateUrl: './category-details.page.html',
    styleUrls: ['./category-details.page.scss'],
})
export class CategoryDetailsPage implements OnInit {

    private category: Category;

    constructor(private activatedRoute: ActivatedRoute,
                private route: Router,
                private alertController: AlertController,
                private categoryService: CategoryService) {
    }

    ngOnInit() {
        const categoryId = this.activatedRoute.snapshot.paramMap.get('id');
        this.categoryService.getDetails(categoryId).subscribe((category: Category) =>
            this.category = category
        );
    }

    async showDeleteDialog() {
        const alert = await this.alertController.create({
            header: 'Confirm deleting',
            message: 'Do you really want to delete this category?',
            buttons: [{
                text: 'Confirm',
                handler: () => {
                    this.deleteById(this.category.id);
                }
            }, 'Cancel']
        });

        await alert.present();
    }


    deleteById(id) {
        this.categoryService.deleteById(id)
            .subscribe(async () => {
                const alert = await this.alertController.create({
                    header: 'Success deleting',
                    message: 'Category was successfully deleted.',
                    buttons: [{
                        text: 'Ok',
                        handler: () => {
                            this.categoryService.markDeletedId(id);
                            this.route.navigate(['/categories']);
                        }
                    }]
                });

                await alert.present();
            }, async (error) => {
                const alert = await this.alertController.create({
                    header: 'Deleting error!',
                    message: 'This category can\'t be deleting',
                    buttons: [{
                        text: 'Ok'
                    }]
                });

                await alert.present();
            });
    }
}
