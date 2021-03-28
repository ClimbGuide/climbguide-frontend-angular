import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { IRoute } from './route';
import { RouteService } from './route.service'

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit, OnDestroy {
  sub!: Subscription;

  private _routeFilter = "";
  get routeFilter(): string {
    return this._routeFilter
  }
  set routeFilter(value: string) {
    this._routeFilter = value;
    this.filteredRoutes = this.performFilter(value);
  }

  filteredRoutes: IRoute[] = [];
  routes: IRoute[] = [];

  constructor(private routeService: RouteService) {}

  performFilter(filterBy: string): IRoute[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.routes.filter((route: IRoute) =>
      route.location.toLocaleLowerCase().includes(filterBy));
  }

  ngOnInit(): void {
    this.sub = this.routeService.getRoutes().subscribe({
      next: routes => {
        this.routes = routes;
      }
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
