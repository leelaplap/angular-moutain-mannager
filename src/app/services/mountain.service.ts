import {Injectable} from '@angular/core';
import {IMountain} from '../mountains/imountain';

@Injectable({
  providedIn: 'root'
})
export class MountainService {
  mountainShowAll: IMountain[] = [
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

  constructor() {
  }

  getAll() {
    return this.mountainShowAll;
  }

  add(mountain) {
    this.mountainShowAll.push(mountain);
  }
}
