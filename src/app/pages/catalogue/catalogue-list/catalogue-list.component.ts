import { Component, OnInit } from '@angular/core';
import { CatalogueService } from 'src/app/_services/catalogue/catalogue.service';

@Component({
  selector: 'app-catalogue-list',
  templateUrl: './catalogue-list.component.html',
  styleUrls: ['./catalogue-list.component.css']
})
export class CatalogueListComponent implements OnInit {
  users: any[];
  isEditModalOpen: boolean = false;
  constructor( private catalogueService:CatalogueService,) { }

  ngOnInit(): void {
    this.getAllCatalogue()
  }

  getAllCatalogue() {
  
    this.catalogueService.getAllCatalogue().subscribe(data=>{
      console.log(data)
      this.users=data
    });
  }
  openEditModal() {
    this.isEditModalOpen = true;
  }

  closeEditModal() {
    this.isEditModalOpen = false;
  }
}
