import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

import { TablesComponent } from '../../pages/tables/tables.component';
import { UserProfileComponent } from 'src/app/pages/user/user-profile/user-profile.component';
import { UserlistComponent } from 'src/app/pages/user/userlist/userlist.component';
import { PromotionListeComponent } from 'src/app/pages/promotion/promotion-liste/promotion-liste.component';
import { CatalogueListComponent } from 'src/app/pages/catalogue/catalogue-list/catalogue-list.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'user-list',   component: UserlistComponent },
    { path: 'promotion-list',   component: PromotionListeComponent },
    { path: 'catalogue-list',   component: CatalogueListComponent },

    { path: 'tables',         component: TablesComponent },
   
];
