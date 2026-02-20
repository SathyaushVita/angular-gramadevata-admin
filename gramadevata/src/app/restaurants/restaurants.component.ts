import { Component } from '@angular/core';
import { TempleService } from '../services/temple.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurants',
  imports: [CommonModule],
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.css'
})
export class RestaurantsComponent {
restaurants: any[] = [];
  selectedRestaurant: any;
  loading = true;
  detailLoading = false;

  constructor(private restaurantService: TempleService) {}

  ngOnInit(): void {
    this.getAllInactive();
  }

  getAllInactive() {
    this.restaurantService.getInactiveRestaurants()
      .subscribe(res => {
        this.restaurants = res.inactive_restaurants;
        this.loading = false;

        // Auto select first item
        if (this.restaurants.length > 0) {
          this.selectRestaurant(this.restaurants[0]._id);
        }
      });
  }

  selectRestaurant(id: string) {
    this.detailLoading = true;

    this.restaurantService.getInactiveRestaurantById(id)
      .subscribe(res => {
        this.selectedRestaurant = res.inactive_restaurants[0];
        this.detailLoading = false;
      });
  }

}