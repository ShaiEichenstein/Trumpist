import { TrampService } from './tramp.service';
import { Injectable } from '@angular/core';
import { element } from "protractor";
import { User } from "./../models/tramp";
import { HttpService } from "./http.service";
import { promise } from "protractor";


@Injectable()
export class LoginService {

  currentUser: User;

  constructor(private httpService: HttpService, private trampService: TrampService) {
  }

  async getUser(id:number): Promise<User> {
    console.log("userid:" + id);
    const usr = await this.httpService.requestGetData<User>("/api/users/" + id);
    console.log(usr);
    this.currentUser = usr;
    //localStorage.setItem('currentUser', JSON.stringify(usr));
    await this.trampService.getTramps(this.currentUser.userId);
    await this.trampService.getTrampRequestList(this.currentUser);

    return usr;
  }
}
