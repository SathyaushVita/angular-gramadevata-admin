import { Component } from '@angular/core';
import { TempleService } from '../services/temple.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-vet-hospitals',
  imports: [CommonModule],
  templateUrl: './vet-hospitals.component.html',
  styleUrl: './vet-hospitals.component.css'
})
export class VetHospitalsComponent {

restaurants: any[] = [];
  selectedRestaurant: any;
  loading = true;
  detailLoading = false;

  constructor(private restaurantService: TempleService) {}

  ngOnInit(): void {
    this.getAllInactive();
  }

  getAllInactive() {
    this.restaurantService.getInactivevethospitals()
      .subscribe(res => {
        this.restaurants = res.inactive_veterinary_hospitals;
        this.loading = false;

        // Auto select first item
        if (this.restaurants.length > 0) {
          this.selectRestaurant(this.restaurants[0]._id);
        }
      });
  }

  selectRestaurant(id: string) {
    this.detailLoading = true;

    this.restaurantService.getInactivevethospitalById(id)
      .subscribe(res => {
        this.selectedRestaurant = res.inactive_veterinary_hospitals[0];
        this.detailLoading = false;
      });
  }

}