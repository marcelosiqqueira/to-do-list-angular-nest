import { Task } from './../shared/task';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit{
  task: Task = new Task();
  title: string = 'Nova tarefa';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.task.id = parseInt(id);
      this.title = 'Alterando tarefa';
      const task = this.taskService.getById(parseInt(id));
      if (task) {
        this.task.description = task?.description;
        this.task.completed = task.completed;
      }
    }
  }
  onSubmit() {
    this.taskService.save(this.task);
    this.router.navigate(['']);
  }
}
