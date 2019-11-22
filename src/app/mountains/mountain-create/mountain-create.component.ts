import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-mountain-create',
  templateUrl: './mountain-create.component.html',
  styleUrls: ['./mountain-create.component.scss']
})
export class MountainCreateComponent implements OnInit {
  addMountainForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    country: ['', [Validators.required, Validators.minLength(4)]],
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  submit() {
    console.log(this.addMountainForm.value);
  }


}
