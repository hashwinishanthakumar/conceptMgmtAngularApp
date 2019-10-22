import { Component, OnInit, Input } from '@angular/core';
import { Idea } from '../shared/idea.model';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.css']
})
export class IdeaComponent implements OnInit {

  @Input() ideasElement: { name: string, desc: string, imgPath: string }


  constructor() { }

  ngOnInit() {
  }

}
