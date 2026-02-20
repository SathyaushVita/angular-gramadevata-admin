import { Component } from '@angular/core';
import { TempleService } from '../services/temple.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tour-operators',
  imports: [  CommonModule],
  templateUrl: './tour-operators.component.html',
  styleUrl: './tour-operators.component.css'
})
export class TourOperatorsComponent {

restaurants: any[] = [];
  selectedRestaurant: any;
  loading = true;
  detailLoading = false;

  constructor(private restaurantService: TempleService) {}

  ngOnInit(): void {
    this.getAllInactive();
  }

  getAllInactive() {
    this.restaurantService.getInactivetouroperator()
      .subscribe(res => {
        this.restaurants = res.tour_operators;
        this.loading = false;

        // Auto select first item
        if (this.restaurants.length > 0) {
          this.selectRestaurant(this.restaurants[0]._id);
        }
      });
  }

  selectRestaurant(id: string) {
    this.detailLoading = true;

    this.restaurantService.getInactiveouroperatorById(id)
      .subscribe(res => {
        this.selectedRestaurant = res.tour_operators[0];
        this.detailLoading = false;
      });
  }

}