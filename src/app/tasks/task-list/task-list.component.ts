import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getAll().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  onTaskDeleted(task: Task) {
    if(task) {
      const index = this.tasks.findIndex( (taskItem:Task) => taskItem._id == task._id);
      this.tasks.splice(index, 1);
    }
  }
}
