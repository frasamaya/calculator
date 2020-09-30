import { Component, OnInit, Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-input-b',
  templateUrl: './input-b.component.html',
  styleUrls: ['./input-b.component.scss']
})
export class InputBComponent implements OnInit {
  inputB:number;
  @Output()
  valueChanged:EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  } 

  /*
  * void Emitter
  */
  onChange(){
    this.valueChanged.emit(this.inputB);
  }

}
