import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product} from '../classes/product';
import { ActivatedRoute, Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers:[ProductService]
})
export class UpdateComponent implements OnInit {
  products = {};
  constructor(private _productservice:ProductService,private route:ActivatedRoute) { }

  ngOnInit() {

    // console.log(this.route.snapshot.params['id']);
    this._productservice.getProductById(this.route.snapshot.params['id'])
    .subscribe(resProduct => this.products = resProduct)
    console.log(this.products);
  }
}
