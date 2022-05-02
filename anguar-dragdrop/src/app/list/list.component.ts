import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ITask } from '../model/Task';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  itemList !: FormGroup;
  tasks : ITask[]= [];
  inProgress : ITask[]= [];
  done : ITask[]= [];


drop(event: CdkDragDrop<ITask[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      }
      }

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.itemList = this.formBuilder.group({
      item : ['',Validators.required]
    })
  }
  
  addTask(){
    this.tasks.push({
      description: this.itemList.value.item,
      done : false
    })
  }

}
