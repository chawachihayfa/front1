import { Component, OnInit } from '@angular/core';
import { PromotionService } from 'src/app/_services/promotion/promotion.service';

@Component({
  selector: 'app-promotion-liste',
  templateUrl: './promotion-liste.component.html',
  styleUrls: ['./promotion-liste.component.css']
})
export class PromotionListeComponent implements OnInit {
  promotion: any[];   constructor( private promotionService:PromotionService,) { }

  ngOnInit(): void {
    this.getAllCatalogue()
  }

  getAllCatalogue() {
  
    this.promotionService.getAllPromotion().subscribe(data=>{
      console.log(data)
      this.promotion=data
    });
  }
}
