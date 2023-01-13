import { Injectable } from '@angular/core';
import { List } from '../interfaces/list';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  list:List[]=[]

  constructor() { }

  addTask(item:string){
      this.list.push({ id: this.list.length, title: item, completed: false });
      console.log(this.list)
      return item
  }


  cambiaStatoElementoLista(id: number) {
      this.list[id].completed = true;
      console.log(this.list[id])
  }

  rimuoviElemento(id:number){
      this.list = this.list.filter(item => item.id!==id)
    }
}
