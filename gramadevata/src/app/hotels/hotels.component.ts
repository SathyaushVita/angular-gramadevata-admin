import { Component } from '@angular/core';
import { TempleService } from '../services/temple.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-hotels',
  imports: [CommonModule],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css'
})
export class HotelsComponent {

restaurants: any[] = [];
  selectedRestaurant: any;
  loading = true;
  detailLoading = false;

  constructor(private restaurantService: TempleService) {}

  ngOnInit(): void {
    this.getAllInactive();
  }

  getAllInactive() {
    this.restaurantService.getInactivehotel()
      .subscribe(res => {
        this.restaurants = res.inactive_hotels;
        this.loading = false;

        // Auto select first item
        if (this.restaurants.length > 0) {
          this.selectRestaurant(this.restaurants[0]._id);
        }
      });
  }

  selectRestaurant(id: string) {
    this.detailLoading = true;

    this.restaurantService.getInactivehotelById(id)
      .subscribe(res => {
        this.selectedRestaurant = res.inactive_hotels[0];
        this.detailLoading = false;
      });
  }

}