import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { IRoute } from './route'

@Injectable({
    providedIn: 'root'
})

export class RouteService {
    private routeUrl = "https://climbguide.herokuapp.com/api/routes/"

    constructor(private http: HttpClient) {}

    getRoutes(): Observable<IRoute[]> {
        return this.http.get<IRoute[]>(this.routeUrl)
    }
}