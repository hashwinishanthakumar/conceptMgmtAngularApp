import { Component } from '@angular/core';
import { Idea } from './shared/idea.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ConceptBin';

  ideasElement = [{
    name: 'Water walk', desc: 'Walk on water it is no more a super natural power', imgPath: 'https://tse4.mm.bing.net/th?id=OIP.4_Y1VI0-mNsN4wVnLhpjdAHaFs&pid=Api&P=0&w=240&h=186'
  },
  {
    name: 'Fly Me', desc: 'Wheels on wing', imgPath: 'https://wonderfulengineering.com/wp-content/uploads/2013/06/Flying-Bikes-Hoax-or-Reality-2.jpg'
  }, { name: 'Drone - Photo booth', desc: 'Automated candid photo capture booth', imgPath: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/04/17/00/drones.jpg' }];


  onAddIdea(ideaData: { name: string, desc: string, imgPath: string }) {

    console.log("onAddIdea js function invoked");
    this.ideasElement.push({ name: ideaData.name, desc: ideaData.desc, imgPath: ideaData.imgPath });
  }


}
