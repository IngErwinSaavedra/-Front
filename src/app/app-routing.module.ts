import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { ListProductComponent } from './components/products/list-product/list-product.component';
import { CreateProductComponent } from './components/products/create-product/create-product.component';

const routes: Routes = [
  { path: '', component: ListProductComponent },
  { path: 'create-product', component: CreateProductComponent },
  { path: 'edit-product/:id', component: CreateProductComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
