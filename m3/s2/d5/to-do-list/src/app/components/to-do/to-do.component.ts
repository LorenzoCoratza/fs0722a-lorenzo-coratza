import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/interfaces/list';
import { TodosService } from 'src/app/service/todos.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
})
export class ToDoComponent implements OnInit {
  listTo: List[] = [];

  constructor(private todoSrv: TodosService) {}

  ngOnInit(): void {}

  addTaskTodo(item: string) {
    setTimeout(() => {
      if (item.trim() !== '') {
        let itemTodo = this.todoSrv.addTask(item);
        console.log(itemTodo);
        this.listTo.push({
          id: this.listTo.length,
          title: itemTodo,
          completed: false,
        });
      }
    }, 2000);
  }

  completeTask(id: number) {
    setTimeout(() => {
      this.listTo[id].completed = true;
      this.listTo = this.listTo.filter((item) => item.id !== id);
      this.todoSrv.cambiaStatoElementoLista(id);
    }, 2000);
  }
}

