import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Product} from '../../model/product';
import {ProductService} from '../../services/product.service';
import {CacheService} from 'ionic-cache';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'app-products',
    templateUrl: './products.page.html',
    styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit, OnDestroy {

    private products: Product[];
    private subscription: Subscription;

    constructor(private productService: ProductService,
                private cache: CacheService) {
        this.subscription = new Subscription();
    }

    ngOnInit() {
        this.cache.itemExists(environment.apiProductUrl).then((isExist) => {
            if (isExist) {
                this.cache.getItem(environment.apiProductUrl)
                    .then((products) => this.products = products)
                    .catch(() => this.setAndCache());
            } else {
                this.setAndCache();
            }
        });

        this.subscription.add(this.productService.getDeletedProductsId()
            .subscribe((index) => {
                this.products = this.products.filter((product) => {
                    return product.id !== index;
                });
            })
        );

        this.subscription.add(this.productService.getAddedProductsPipe()
            .subscribe((product) => {
                this.products.push(product);
            }));

    }

    setAndCache(): void {
        this.subscription.add(
            this.productService.getAll()
                .subscribe(products => {
                    this.products = products;
                    this.cache.saveItem(environment.apiProductUrl, products);
                })
        );
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
