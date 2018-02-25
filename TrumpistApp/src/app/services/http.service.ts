import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { 
  }

  async requestGetData<T>(url:string): Promise<T> { 
      const data = await this.http.get<T>(url).toPromise();
      return data;

  }

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
