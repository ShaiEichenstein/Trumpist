import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Tramp } from "../models/tramp";
import { TrampRequest } from "../models/trampRequest";

const httpOptions = {
  headers: new HttpHeaders({
    'content': 'application/json',
    'content-type': 'application/x-www-form-urlencoded'
  })
};

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {}

  async requestGetData<T>(url: string): Promise<T> {
      return await this.http.get<T>(url).toPromise();
  }


  async addTrampRequest<T> (url: string, trampRequst: TrampRequest): Promise<T> {
    const tramps = await this.http.post<T>(url, trampRequst).toPromise();
    return tramps;
  }

  async getUser<T> (url: string, userID:number): Promise<T> {
    const tramps = await this.http.post<T>(url, userID).toPromise();
    return tramps;
  }
  
//   async requestPostData<T>(url:string): Promise<T> { 
//     return await this.http.post<T>(url).toPromise();
//   }


  // async requestPostData<T>(url:string): Promise<T> { 
  //   const data = await this.http.post<T>(url).toPromise();
  //   return data;
  // }
    //   getHeader = () => {
    //     let headers = new Headers();
    //     headers.append("Content-Type", 'application/json');

    //     return headers;
    // };

    // request = (req) => {
    //     let baseUrl = ApiUrl,
    //         requestOptions = new RequestOptions({
    //         method: req.method,
    //         url: baseUrl+req.url,
    //         headers: req.header ? req.header : this.getHeader(),
    //         body: JSON.stringify(req.params)
    //     });

    //     return this.http.request(new Request(requestOptions))
    //                     .map((res:Response) => res.json());
    // }

  
}
