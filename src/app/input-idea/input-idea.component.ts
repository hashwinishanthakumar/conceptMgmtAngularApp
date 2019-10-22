import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-idea',
  templateUrl: './input-idea.component.html',
  styleUrls: ['./input-idea.component.css']
})
export class InputIdeaComponent implements OnInit {

  @Output() ideaCreated = new EventEmitter<{ name: string, desc: string, imgPath: string }>();

  ideaName = '';
  ideaDesc = '';
  imgPath = '';

  createIdea() {
    console.log("I am here");
    console.log(this.ideaName);

    this.ideaCreated.emit({ name: this.ideaName, desc: this.ideaDesc, imgPath: this.imgPath });
  }
  constructor() { }

  ngOnInit() {
  }


}
