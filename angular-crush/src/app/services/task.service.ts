import { Injectable } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTask():Task[]{
    return TASKS;
  }
}
