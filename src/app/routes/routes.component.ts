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
  routes: IRoute[] = [];

  constructor(private routeService: RouteService) {}

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
