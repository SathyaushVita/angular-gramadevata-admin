import { Component } from '@angular/core';
import { TempleService } from '../services/temple.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-blood-banks',
  imports: [CommonModule],
  templateUrl: './blood-banks.component.html',
  styleUrl: './blood-banks.component.css'
})
export class BloodBanksComponent {

restaurants: any[] = [];
  selectedRestaurant: any;
  loading = true;
  detailLoading = false;

  constructor(private restaurantService: TempleService) {}

  ngOnInit(): void {
    this.getAllInactive();
  }

  getAllInactive() {
    this.restaurantService.getInactivebloodbank()
      .subscribe(res => {
        this.restaurants = res.blood_banks;
        this.loading = false;

        // Auto select first item
        if (this.restaurants.length > 0) {
          this.selectRestaurant(this.restaurants[0]._id);
        }
      });
  }

  selectRestaurant(id: string) {
    this.detailLoading = true;

    this.restaurantService.getInactivebloodbankById(id)
      .subscribe(res => {
        this.selectedRestaurant = res.blood_banks[0];
        this.detailLoading = false;
      });
  }

}