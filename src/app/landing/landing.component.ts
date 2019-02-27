import {Component, EventEmitter, Injectable, Input, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Subscription} from "rxjs/internal/Subscription";

@Injectable()
export class InputService {

  public inputEvents: EventEmitter<string> = new EventEmitter();

  public inputChanged(val: string) {
    this.inputEvents.emit(val);
  }
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnDestroy {
  public form:FormGroup;
  public name: any;
  public myValue: string;
  public subscription: Subscription;

  constructor(private formBuilder: FormBuilder, private service: InputService, private router: Router) {
    this.subscription = this.service.inputEvents.subscribe((newValue) => {
      this.myValue = newValue;
    })
  }

  /*ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
    });

    this.form.get('name').setValue('some value');
  }*/

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  usersList() {
    this.router.navigate(['users']);
  }

  orders() {
    this.router.navigate(['orders']);
  }
}
