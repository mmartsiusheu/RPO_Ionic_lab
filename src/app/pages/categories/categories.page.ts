import {Component, OnDestroy, OnInit} from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {Category} from '../../model/category';
import {Subscription} from 'rxjs';
import {CacheService} from 'ionic-cache';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.page.html',
    styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit, OnDestroy {

    private categories: Category[];
    private subscription: Subscription;

    constructor(private categoryService: CategoryService,
                private cache: CacheService) {
        this.subscription = new Subscription();
    }

    ngOnInit() {
        this.cache.itemExists(environment.apiCategoryUrl).then((isExist) => {
            if (isExist) {
                this.cache.getItem(environment.apiCategoryUrl).then((categories) => this.categories = categories);
            } else {
                this.subscription.add(
                    this.categoryService.getAll()
                        .subscribe(categories => {
                            this.categories = categories;
                            this.cache.saveItem(environment.apiCategoryUrl, categories);
                        })
                );
            }
        });

        this.subscription.add(this.categoryService.getDeletedCategoriesId()
            .subscribe((index) => {
                this.categories = this.categories.filter((category) => {
                    return category.id !== index;
                });
            })
        );

        this.subscription.add(this.categoryService.getAddedCategoriesPipe()
            .subscribe((category) => {
                this.categories.push(category);
            }));

    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }


}
