import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";
import { Pipe, PipeTransform, Injectable } from '@angular/core';
@Pipe({
  name: 'filter'
})
@Injectable()
export class FilterPipe implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {
    if (!items) {
      return [];
    }
    if (!field || !value) {
      return items;
    }
    return items.filter(singleItem => singleItem[field].toLowerCase().includes(value.toLowerCase()));
  }
}
export class User {

  id: any;
  name: string;
  username: string;
  city: string;
  zipcode: any;
  companyName: any;
  website: any;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  {

  users: User[];

  public searchString: string;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
  }

}
