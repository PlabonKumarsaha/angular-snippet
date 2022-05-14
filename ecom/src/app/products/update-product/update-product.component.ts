import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productId :any =0;

  constructor(private activeRoute : ActivatedRoute) { }

  ngOnInit(): void {
   this.productId= this.activeRoute.snapshot.paramMap.get('id');
   console.log('id ',this.productId);
  }

}
