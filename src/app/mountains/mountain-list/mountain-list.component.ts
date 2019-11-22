import {Component, OnInit} from '@angular/core';
import {IMountain} from '../imountain';

@Component({
  selector: 'app-mountain-list',
  templateUrl: './mountain-list.component.html',
  styleUrls: ['./mountain-list.component.scss']
})
export class MountainListComponent implements OnInit {
  mountains: IMountain[] = [
    {
      name: 'Everest',
      country: 'Nepal',
      image: 'assets/images/mountain/anh1.jpg',
      star: 2.5,
    },
    {
      name: 'Himalaya',
      country: 'India',
      image: 'assets/images/mountain/anh2.jpg',
      star: 4,
    },
    {
      name: 'Phú sĩ',
      country: 'Nepal',
      image: 'assets/images/mountain/phusi.jpg',
      star: 1,
    }
  ];
  showImg = true;
  listMountain: IMountain[] = [];
  showMess: string;

  constructor() {
  }

  ngOnInit() {
    this.listMountain = this.mountains;
  }

  delete(id) {
    this.mountains.splice(id, 1);
  }

  showImage() {
    this.showImg = !this.showImg;
  }

  filter(event) {
    const keyword = event.target.value;
    this.listMountain = (keyword) ? this.search(keyword) : this.mountains;
  }

  search(keyword) {
    return this.mountains.filter(
      mountain => mountain.name.toLowerCase().indexOf(keyword) !== -1,
    );
  }

  showMessage(event) {
    this.showMess = event;
  }
}
