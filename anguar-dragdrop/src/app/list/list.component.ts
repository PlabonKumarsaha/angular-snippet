import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  itemList !: FormGroup;
  tasks : any[]= [];
  inProgress : any[]= [];
  done : any[]= [];


  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.itemList = this.formBuilder.group({
      item : ['',Validators.required]
    })
  }

}
