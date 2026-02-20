import { Component } from '@angular/core';
import { TempleService } from '../services/temple.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tour-guides',
  imports: [CommonModule],
  templateUrl: './tour-guides.component.html',
  styleUrl: './tour-guides.component.css'
})
export class TourGuidesComponent {

restaurants: any[] = [];
  selectedRestaurant: any;
  loading = true;
  detailLoading = false;

  constructor(private restaurantService: TempleService) {}

  ngOnInit(): void {
    this.getAllInactive();
  }

  getAllInactive() {
    this.restaurantService.getInactivetourguide()
      .subscribe(res => {
        this.restaurants = res.inactive_tour_guides;
        this.loading = false;

        // Auto select first item
        if (this.restaurants.length > 0) {
          this.selectRestaurant(this.restaurants[0]._id);
        }
      });
  }

  selectRestaurant(id: string) {
    this.detailLoading = true;

    this.restaurantService.getInactivetourguideById(id)
      .subscribe(res => {
        this.selectedRestaurant = res.inactive_tour_guides[0];
        this.detailLoading = false;
      });
  }

}