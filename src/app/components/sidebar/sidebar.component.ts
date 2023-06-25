import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/_services/auth/storage.service';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/user-list', title: 'User list',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/promotion-list', title: 'Promotion List',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/catalogue-list', title: 'Catalogue List',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
  
   
   
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  username:any;
  user:any
  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router,private tokenStorage: StorageService ,) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
   if (this.tokenStorage.getToken()) {
    this.username = this.tokenStorage.getUser().username;
        this.user = this.tokenStorage.getUser();
}
  }

  logout() {
    this.tokenStorage.signOut();
    this.router.navigate(['/login']);
  }
}
