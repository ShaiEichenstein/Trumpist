import { Injectable } from '@angular/core';
import { element } from "protractor";
import { User } from "./../models/tramp";
import { HttpService } from "./http.service";
import { promise } from "protractor";


@Injectable()
export class LoginService {

  user: User;

  constructor(private httpService: HttpService) {
  }

  async getUser(id:number): Promise<User> {
    // return this.trampList;
    const usr = await this.httpService.requestGetData<User>('/api/users',id);
    console.log(usr);
    localStorage.setItem('currentUser', JSON.stringify(usr));
    return usr;
    // return this.trampList;
  }
}
