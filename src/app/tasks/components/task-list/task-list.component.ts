import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Task } from './../../models/task';
import { TaskArrayService } from './../../services/task-array.service';

@Component({
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Array<Task>;

  constructor(
    private router: Router,
    private taskArrayService: TaskArrayService
  ) { }

  ngOnInit() {
    console.log(this.tasks);
    this.getTasks().catch(err => console.log(err));
  }

  completeTask(task: Task): void {
    this.taskArrayService.completeTask(task);
  }

  editTask(task: Task): void {
    const link = ['/edit', task.id];
    this.router.navigate(link);
  }

  private async getTasks() {
    this.tasks = await this.taskArrayService.getTasks();
  }
}
