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
    console.log("userid:" + id);
    // const userDet: User = <User>{
    //       userId:id,
    //       password:"",
    //       lastName: "",
    //       firstName: "",
    //       gender: "",
    //       address: {
    //         city: "",
    //         street: ""
    //       },
    //       entranceAvgTime: {
    //         hour: 8,
    //         minute: 20
    //       },
    //       leavingAvgTime: {
    //         hour: 18,
    //         minute: 25
    //       }
    //   };
    const usr = await this.httpService.requestGetData<User>("/api/users/" + id);
    console.log(usr);
    localStorage.setItem('currentUser', JSON.stringify(usr));
    return usr;
  }
}
