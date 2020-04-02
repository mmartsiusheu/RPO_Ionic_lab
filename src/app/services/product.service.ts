import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {environment} from '../../environments/environment';
import {Product} from '../model/product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private deletedProductsIds: Subject<number>;
    private addedProducts: Subject<Product>;

    constructor(private http: HttpClient) {
        this.deletedProductsIds = new Subject<number>();
        this.addedProducts = new Subject<Product>();
    }

    getAll(): Observable<Product[]> {
        return this.http.get<Product[]>(environment.apiProductUrl);
    }

    getDetails(id): Observable<Product> {
        return this.http.get<Product>(`${environment.apiProductUrl}/${id}`);
    }

    addProduct(product: Product) {
        return this.http.post(environment.apiProductUrl, product);
    }

    addProductToPipe(product: Product) {
        this.addedProducts.next(product);
    }

    getAddedProductsPipe(): Observable<Product> {
        return this.addedProducts.asObservable();
    }

    deleteById(id) {
        return this.http.delete(`${environment.apiProductUrl}/${id}`);
    }

    markDeletedId(id): void {
        this.deletedProductsIds.next(id);
    }

    getDeletedProductsId(): Observable<number> {
        return this.deletedProductsIds.asObservable();
    }
}
