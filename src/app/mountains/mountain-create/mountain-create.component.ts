import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-mountain-create',
  templateUrl: './mountain-create.component.html',
  styleUrls: ['./mountain-create.component.scss']
})
export class MountainCreateComponent implements OnInit {
  submitted = false;
  addMountainForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    country: ['', [Validators.required, Validators.minLength(4)]],
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  submit() {
    this.submitted = true;
    console.log(this.addMountainForm.value);
  }

  get name() {
    return this.addMountainForm.get('name');
  }

  get country() {
    return this.addMountainForm.get('country');
  }
}
