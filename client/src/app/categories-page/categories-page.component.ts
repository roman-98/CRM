import {Component, OnInit} from '@angular/core'
import {CategoriesService} from '../shared/layouts/services/categories.service'
import {Category} from '../shared/layouts/interfaces'
import {Observable} from 'rxjs/index'

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.css']
})
export class CategoriesPageComponent implements OnInit {


  categories$: Observable<Category[]>

  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit() {
    this.categories$ = this.categoriesService.fetch()
  }

}