import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {
  listProducts: Product[] = [];

  constructor(private _productService: ProductsService,
              private toastr:ToastrService) {}

  ngOnInit():void {
    this.getProducts();
  }

  getProducts() {
    this._productService.getProducts().subscribe(data => {
      console.log(data);
      this.listProducts = data;
    }, error => {
      console.log(error);
    })
  }

  deleteProduct(id: any) {
    this._productService.deleteProduct(id).subscribe(data => {
      this.toastr.error('The product was deleted successfully', "´Product Deleted");
      this.getProducts();
    }, error => {
      console.log(error)
    })
  }

}
