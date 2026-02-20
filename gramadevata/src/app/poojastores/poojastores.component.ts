import { Component } from '@angular/core';
import { TempleService } from '../services/temple.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-poojastores',
  imports: [CommonModule],
  templateUrl: './poojastores.component.html',
  styleUrl: './poojastores.component.css'
})
export class PoojastoresComponent {

restaurants: any[] = [];
  selectedRestaurant: any;
  loading = true;
  detailLoading = false;

  constructor(private restaurantService: TempleService) {}

  ngOnInit(): void {
    this.getAllInactive();
  }

  getAllInactive() {
    this.restaurantService.getInactivepooj()
      .subscribe(res => {
        this.restaurants = res.inactive_pooja_stores;
        this.loading = false;

        // Auto select first item
        if (this.restaurants.length > 0) {
          this.selectRestaurant(this.restaurants[0]._id);
        }
      });
  }

  selectRestaurant(id: string) {
    this.detailLoading = true;

    this.restaurantService.getInactivepoojaById(id)
      .subscribe(res => {
        this.selectedRestaurant = res.inactive_pooja_stores[0];
        this.detailLoading = false;
      });
  }

}