import { Component } from '@angular/core';
import { trigger,animate,style,transition,keyframes } from '@angular/animations';

import { ModalService } from '../app/_modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  ,animations:[
    trigger("moveInLeft",[
        transition("void=> *",[style({transform:"translateX(300px)"}),
          animate(200,keyframes([
            style({transform:"translateX(300px)"}),
            style({transform:"translateX(0)"})
          ]))]),
        transition("*=>void",[style({transform:"translateX(0px)"}),
          animate(100,keyframes([
            style({transform:"translateX(0px)"}),
            style({transform:"translateX(300px)"})
          ]))])
      ])
  ]

})


export class AppComponent {
  /*insert function */
  todoArray=[];
  todo: any;
  todos: any;
  

  constructor(private modalService: ModalService) {}
  
  

  ngOnInit(){
    this.todoArray = JSON.parse(localStorage.getItem('todos')) || [];

  }
  ngOnDestroy(){
    localStorage.setItem('todos',JSON.stringify(this.todoArray));
  }

  openModal(id: string) {
    this.modalService.open(id);
}

closeModal(id: string) {
    this.modalService.close(id);
}



// Hanble double click on a row








  //todoForm: new FormGroup()
addTodo(value: string){
    if(value!==""){
     this.todoArray.push(value)
    //console.log(this.todos) 
  }
  else{
    alert('Field required **')
  }
    
  }

  /*delete function*/
  deleteItem(todo: any){
    for(let i=0 ;i<= this.todoArray.length ;i++){
      if(todo== this.todoArray[i]){
        this.todoArray.splice(i,1)
      }else{
        alert('Cant delete item')
      }
    }
  }

  /*edit function*/
  

  /*delete all function */
  deleteAll(){
    this.todoArray = []
    
  }

  /*update function */
  updateItem(todo: any){
    for(let i=0 ;i<= this.todoArray.length ;i++){
      if(todo== this.todoArray[i]){
        this.todoArray.splice(i,1)
        
      }else{
        alert('Cant update item')
      }

  }
}

  /*submit function*/
  todoSubmit(value:any){
    if(value!==""){
      this.todoArray.push(value.todo)
      
    }
    else{
      alert('Field required **')
    }
  }


}
