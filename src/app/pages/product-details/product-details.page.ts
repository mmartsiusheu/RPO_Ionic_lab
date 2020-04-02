import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Observable} from 'rxjs';
import {Product} from '../../model/product';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.page.html',
    styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

    product: Product;

    constructor(private route: ActivatedRoute,
                private productService: ProductService) {
    }

    ngOnInit() {
        const productId = this.route.snapshot.paramMap.get('id');
        this.productService.getDetails(productId)
            .subscribe((product) => {
                this.product = product;
            });
    }

}
