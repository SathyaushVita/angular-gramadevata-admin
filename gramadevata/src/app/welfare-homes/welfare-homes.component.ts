import { Component } from '@angular/core';
import { TempleService } from '../services/temple.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { AuthenticationService } from '../services/authentication.service';
import { GoshalaService } from '../services/goshala.service';
@Component({
  selector: 'app-welfare-homes',
  imports: [CommonModule, NzSelectModule],
  templateUrl: './welfare-homes.component.html',
  styleUrl: './welfare-homes.component.css'
})
export class WelfareHomesComponent {



 temples: any;
  selectedTemple: any = null;
  blockId: any;
  templeId: any;
  CategoryOptions: { label: string; value: string }[] = [];
  selectedCategoryId:any;
  isConnected = false;
  templedata: any;
  ConnectionData: any;
  selectedImage: any;
  connectedId: any;
  villageid:any;
  goshaladata:any;

  constructor(private templeservice: TempleService, private router: Router, private authenticationservice: AuthenticationService,
    private goshalaService: GoshalaService,
    private route:ActivatedRoute,
  ){}

  ngOnInit(): void{
    this.fetchagoshals();

  }


  
    fetchagoshals() {
      this.goshalaService.getallwelfare().subscribe(
        (data) => {
          console.log("Inactive goshala fetched:", data);
          this.temples = data.results
        },
        (error) => {
          console.error("Error fetching inactive goshala:", error);
        }
      );
    }
 


  fetchgoshalagetbyid(temple:any): void {
    this.templeId = this.route.snapshot.paramMap.get("id");
    this.selectedTemple = temple;

  
    this.goshalaService.getbywelfare(this.templeId).subscribe(
      (data: any) => {
        this.goshaladata = data;
      },
      (error: any) => {
        console.error('Error fetching goshala data:', error);
      }
    );
  }
  


  


  editGoshala(id: any): void {
    this.router.navigate(['editgoshala', id]);
  }
  
  

  handleImageError(event: Event){
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = 'assets/ohm.jpg';
  }


  

  addGoshala(){
    this.router.navigate(['addgoshala'])
  }

}