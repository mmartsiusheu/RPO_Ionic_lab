import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Category} from '../model/category';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    private deletedCategoriesIds: Subject<number>;
    private addedCategories: Subject<Category>;

    constructor(private http: HttpClient) {
        this.deletedCategoriesIds = new Subject<number>();
        this.addedCategories = new Subject<Category>();
    }

    getAll(): Observable<Category[]> {
        return this.http.get<Category[]>(environment.apiCategoryUrl);
    }

    getDetails(id): Observable<Category> {
        return this.http.get<Category>(`${environment.apiCategoryUrl}/${id}`);
    }

    addCategory(category: Category) {
        return this.http.post(environment.apiCategoryUrl, category);
    }

    addCategoryToPipe(category: Category) {
        this.addedCategories.next(category);
    }

    getAddedCategoriesPipe(): Observable<Category> {
        return this.addedCategories.asObservable();
    }

    deleteById(id) {
        return this.http.delete(`${environment.apiCategoryUrl}/${id}`);
    }

    markDeletedId(id): void {
        this.deletedCategoriesIds.next(id);
    }

    getDeletedCategoriesId(): Observable<number> {
        return this.deletedCategoriesIds.asObservable();
    }
}
