import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { ApiService } from './services/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ReactiveFormsCrud';


    constructor(public dialog: MatDialog,
    private api : ApiService) {}

  ngOnInit(): void {
    this.getAllProducts();
    }
  
  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent,{
    width:'30%'  
    });
   }

   getAllProducts(){
    this.api.getProduct().subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:(res)=>{
        console.log('error occured!')
      }
    });
   }

}
