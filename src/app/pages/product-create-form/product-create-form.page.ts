import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';
import {ProductService} from '../../services/product.service';

@Component({
    selector: 'app-product-create-form',
    templateUrl: './product-create-form.page.html',
    styleUrls: ['./product-create-form.page.scss'],
})
export class ProductCreateFormPage implements OnInit {

    private productForm;

    constructor(private formBuilder: FormBuilder,
                private alertController: AlertController,
                private router: Router,
                private productService: ProductService) {
    }

    ngOnInit() {
        this.productForm = this.formBuilder.group({
            productName: new FormControl('', Validators.required),
            productPrice: new FormControl('', Validators.required),
            productVendor: new FormControl('', Validators.required),
            vendorCode: new FormControl('', Validators.required),
            categoryId: new FormControl('', Validators.required)
        });
    }

    actionOnConfirm() {
        console.log(this.productForm.value);

        // this.productService.addProduct(this.productForm.value)
        //     .subscribe(console.log);
    }

}
