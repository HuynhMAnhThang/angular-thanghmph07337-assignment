import { Component, OnInit } from '@angular/core';
import { Product } from '../_model/product';
import { ActivatedRoute} from'@angular/router';
import { ProductServicesService } from '../services/product-services.service';

@Component({
  selector: 'app-manager-product',
  templateUrl: './manager-product.component.html',
  styleUrls: ['./manager-product.component.css']
})
export class ManagerProductComponent implements OnInit {

  constructor(
    private pService: ProductServicesService,
    private aRouter : ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getProducts();
  }
getProducts(){

}
addProduct(){

}
editProduct(){

}
removeProduct(){

}
}