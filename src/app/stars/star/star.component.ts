import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {
  @Input() star: number;
  widthStar: number;
  // @ts-ignore
  // tslint:disable-next-line:no-output-native
  @Output() message = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.widthStar = this.star * 75 / 5;
  }

  click() {
    this.message.emit('Số sao được đấnh giá là: ' + this.star);
  }

}
