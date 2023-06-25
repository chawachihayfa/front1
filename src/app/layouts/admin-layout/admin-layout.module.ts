import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserProfileComponent } from 'src/app/pages/user/user-profile/user-profile.component';
import { UserlistComponent } from 'src/app/pages/user/userlist/userlist.component';
import { PromotionListeComponent } from 'src/app/pages/promotion/promotion-liste/promotion-liste.component';
import { CatalogueListComponent } from 'src/app/pages/catalogue/catalogue-list/catalogue-list.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,

  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    UserlistComponent,
    PromotionListeComponent,
    CatalogueListComponent,


   
  ]
})

export class AdminLayoutModule {}
