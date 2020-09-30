import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-c',
  templateUrl: './input-c.component.html',
  styleUrls: ['./input-c.component.scss']
})
export class InputCComponent implements OnInit {
  inputA:number = 0;
  inputB:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  /*
  * Emiter from input A component
  * @params : event
  */
  inputAChange(event:number) {
    if(typeof event == 'number'){
      this.inputA = event;
    }else{
      this.inputA = 0;
    }
  }
  
  /*
  * Emiter from input A component
  * @params : event
  */
  inputBChange(event:number) {
    if(typeof event == 'number'){
      this.inputB = event;
    }else{
      this.inputB = 0;
    }
  }
}
