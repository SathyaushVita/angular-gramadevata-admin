import { Component } from '@angular/core';
import { TempleService } from '../services/temple.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-village-add-more-data',
  imports: [CommonModule],
  templateUrl: './village-add-more-data.component.html',
  styleUrl: './village-add-more-data.component.css'
})
export class VillageAddMoreDataComponent {

 templeData: any[] = [];
  isLoading = false;

  constructor(private templeservice: TempleService) {}

  ngOnInit(): void {
    this.loadAddMorevillageData();
  }

  loadAddMorevillageData() {
    this.isLoading = true;

    this.templeservice.villageddmoredata().subscribe(
      (res) => {
        this.templeData = res || [];
        this.isLoading = false;
      },
      (err) => {
        console.error('Error fetching add more temple data', err);
        this.isLoading = false;
      }
    );
  }


mergevillage(templeId: string): void {
  this.templeservice.Mergevillagedata(templeId, {}).subscribe({
    next: () => {
      console.log('Merge endpoint hit successfully');
    },
    error: (err) => {
      console.error('Error hitting merge endpoint:', err);
    }
  });
}


}