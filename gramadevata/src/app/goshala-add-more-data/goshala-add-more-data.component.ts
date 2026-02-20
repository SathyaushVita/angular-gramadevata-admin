import { Component } from '@angular/core';
import { TempleService } from '../services/temple.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-goshala-add-more-data',
  imports: [CommonModule],
  templateUrl: './goshala-add-more-data.component.html',
  styleUrl: './goshala-add-more-data.component.css'
})
export class GoshalaAddMoreDataComponent {

 templeData: any[] = [];
  isLoading = false;

  constructor(private templeservice: TempleService) {}

  ngOnInit(): void {
    this.loadAddMoregoshalaData();
  }

  loadAddMoregoshalaData() {
    this.isLoading = true;

    this.templeservice.goshaladdmoredata().subscribe(
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


mergegoshala(templeId: string): void {
  this.templeservice.Mergegoshaladata(templeId, {}).subscribe({
    next: () => {
      console.log('Merge endpoint hit successfully');
    },
    error: (err) => {
      console.error('Error hitting merge endpoint:', err);
    }
  });
}


}