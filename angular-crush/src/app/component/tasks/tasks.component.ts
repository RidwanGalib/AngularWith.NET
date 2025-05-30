import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks:Task[]=[];

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.taskService.getTask().subscribe((response)=>
    (this.tasks=response));
  }
  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe((response)=>
      (this.tasks=this.tasks.filter(t=>t.id!==task.id)))
    }
  toggleReminder(task: Task) {
      task.reminder=!task.reminder;
      this.taskService.updateTaskReminder(task).subscribe();
  }
  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((response:Task)=>
      (this.tasks.push(response)));
  }
}
