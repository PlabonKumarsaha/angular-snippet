import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  freshnessList = ['Brand New','Second Hand','Refrbished'];
  productForm !:FormGroup;

  constructor(private formBuilder : FormBuilder,
    private api : ApiService,
    private dialogRef : MatDialogRef<DialogComponent>) { }

  addProduct(){
    if(this.productForm.valid){
      this.api.postProduct(this.productForm.value)
      .subscribe({
        next:(res)=>{
          alert('product added sucessfully')
          this.productForm.reset();
          this.dialogRef.close('save')
        },
        error:()=>{
          alert('error occuered!')
        }
      })
    }
  }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName : ['',Validators.required],
      category : ['',Validators.required],
      freshness : ['',Validators.required],
      price : ['',Validators.required],
      comment : ['',Validators.required],
      date : ['',Validators.required],
    })
  }


}
