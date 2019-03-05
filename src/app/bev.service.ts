import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BevService {
    constructor(
        private _http: Http
    ) {}

    getBeveragesList(): Observable<any> {
        const url = './assets/bevList.json';
        return this._http.get(url)
        .map((res: any) => res.json());
    }
}
