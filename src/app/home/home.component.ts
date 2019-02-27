import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {InputService} from "../landing/landing.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  private _inputValue: string;

  constructor(private service: InputService) {}

  public get inputValue(): string {
    return this._inputValue;
  }

  public set inputValue(val: string) {
    this._inputValue = val;
    this.service.inputChanged(val);
  }





 /* ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
    });

    this.name = 'some value';
  }*/

 /* onSubmit() {

    this.router.navigate(['landing']);

  }*/
}
