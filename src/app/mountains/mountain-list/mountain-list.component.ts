import {Component, OnInit} from '@angular/core';
import {IMountain} from '../imountain';
import {MountainService} from '../../services/mountain.service';

@Component({
  selector: 'app-mountain-list',
  templateUrl: './mountain-list.component.html',
  styleUrls: ['./mountain-list.component.scss']
})
export class MountainListComponent implements OnInit {
  mountains = this.ms.getAll();
  showImg = true;
  listMountain: IMountain[] = [];
  showMess: string;

  constructor(private ms: MountainService) {
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
