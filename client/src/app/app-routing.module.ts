import {NgModule} from "@angular/core"
import {RouterModule, Routes} from "@angular/router"
import {AnalyticsPageComponent} from "./analytics-page/analytics-page.component"
import {CategoriesFormComponent} from "./categories-page/categories-form/categories-form.component"
import {CategoriesPageComponent} from "./categories-page/categories-page.component"
import {HistoryPageComponent} from "./history-page/history-page.component"
import {LoginPageComponent} from "./login-page/login-page.component"
import {OrderCategoriesComponent} from "./order-page/order-categories/order-categories.component"
import {OrderPageComponent} from "./order-page/order-page.component"
import {OrderPositionsComponent} from "./order-page/order-positions/order-positions.component"
import {OwerviewPageComponent} from "./owerview-page/owerview-page.component"
import {RegisterPageComponent} from "./register-page/register-page.component"
import {AuthLayoutComponent} from "./shared/layouts/auth-layout/auth-layout.component"
import {AuthGuard} from "./shared/layouts/classes/auth.guard"
import {SiteLayoutComponent} from "./shared/layouts/site-layout/site-layout.component"

const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent, children: [
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'register', component: RegisterPageComponent}
    ]
  },
  {
    path: '', component: SiteLayoutComponent, canActivate: [AuthGuard], children: [
      {path: 'overview', component: OwerviewPageComponent},
      {path: 'analytics', component: AnalyticsPageComponent},
      {path: 'history', component: HistoryPageComponent},
      {path: 'order', component: OrderPageComponent, children: [
        {path: '', component: OrderCategoriesComponent},
        {path: ':id', component: OrderPositionsComponent}
      ]},
      {path: 'categories', component: CategoriesPageComponent},
      {path: 'categories/new', component: CategoriesFormComponent},
      {path: 'categories/:id', component: CategoriesFormComponent},
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}