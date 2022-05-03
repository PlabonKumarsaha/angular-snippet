import { Component, OnInit, ViewChild , AfterViewInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from './dialog/dialog.component';
import { ApiService } from './services/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ReactiveFormsCrud';

  displayedColumns: string[] = ['ProductName', 'Catgeory', 'date', 'price','comment'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


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
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:(res)=>{
        console.log('error occured!')
      }
    });
   }

   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
