import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MountainService} from '../../services/mountain.service';
import {Router} from '@angular/router';

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
    star: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder,
              private ms: MountainService,
              private route: Router) {
  }

  ngOnInit() {
  }

  submit() {
    this.submitted = true;
    const data = this.addMountainForm.value;
    this.ms.add(data);
    this.route.navigate(['']);
  }

  get name() {
    return this.addMountainForm.get('name');
  }

  get country() {
    return this.addMountainForm.get('country');
  }

  get star() {
    return this.addMountainForm.get('star');
  }
}
