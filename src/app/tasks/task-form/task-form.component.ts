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
      this.task._id = id;
      const task = this.taskService.getById(id).subscribe(task => {
        this.task = task;
        this.title = 'Alterando tarefa';
      });
    }
  }

  onSubmit() {
    this.taskService.save(this.task).subscribe();
    this.router.navigate(['']);
  }
}
