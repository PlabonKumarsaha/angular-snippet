import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  productId :any =0;

  constructor(private activeRoute : ActivatedRoute) { }

  ngOnInit(): void {
   this.productId= this.activeRoute.snapshot.paramMap.get('id');
   console.log('id ',this.productId);
  }

}
