import { Component, OnInit, Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-input-a',
  templateUrl: './input-a.component.html',
  styleUrls: ['./input-a.component.scss']
})
export class InputAComponent implements OnInit {
  inputA:number;
  @Output()
  valueChanged:EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  } 

  /*
  * void Emitter
  */
  onChange(){
    this.valueChanged.emit(this.inputA);
  }
}
