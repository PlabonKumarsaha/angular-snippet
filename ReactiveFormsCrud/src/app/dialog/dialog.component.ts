import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  freshnessList = ['Brand New','Second Hand','Refrbished']

  constructor() { }

  ngOnInit(): void {
  }

}
