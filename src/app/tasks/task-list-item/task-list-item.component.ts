import { Task } from './../shared/task';
import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent implements OnInit {
    @Input()
    task: Task;

    constructor(private taskService: TaskService) {
      this.task = new Task();
    }

    remove(task: Task) {
      this.taskService.delete(task.id);
    }

    onCompletedCheckChange(task: Task) {
      this.taskService.save(task);
    }

    ngOnInit() {
    }
}
