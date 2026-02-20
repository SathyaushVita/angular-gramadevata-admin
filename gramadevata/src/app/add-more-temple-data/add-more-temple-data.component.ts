import { Component } from '@angular/core';
import { TempleService } from '../services/temple.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-more-temple-data',
  imports: [CommonModule],
  templateUrl: './add-more-temple-data.component.html',
  styleUrl: './add-more-temple-data.component.css'
})
export class AddMoreTempleDataComponent {

  templeData: any[] = [];
  isLoading = false;

  constructor(private templeservice: TempleService) {}

  ngOnInit(): void {
    this.loadAddMoreTempleData();
  }

  loadAddMoreTempleData() {
    this.isLoading = true;

    this.templeservice.Templeaddmoredata().subscribe(
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


mergeTemple(templeId: string): void {
  this.templeservice.Mergetempledata(templeId, {}).subscribe({
    next: () => {
      console.log('Merge endpoint hit successfully');
    },
    error: (err) => {
      console.error('Error hitting merge endpoint:', err);
    }
  });
}


}