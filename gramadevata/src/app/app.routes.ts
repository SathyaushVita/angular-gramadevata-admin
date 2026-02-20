import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TemplesComponent } from './temples/temples.component';
import { EventsComponent } from './events/events.component';
import { GoshalasComponent } from './goshalas/goshalas.component';
import { EditTempleComponent } from './edit-temple/edit-temple.component';
import { EditGoshalaComponent } from './edit-goshala/edit-goshala.component';
import { VillagesComponent } from './villages/villages.component';
import { EditVillageComponent } from './edit-village/edit-village.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { AddtempleComponent } from './addtemple/addtemple.component';
// import { EditEventComponent } from './edit-event/edit-event.component';
import { authGuard } from './auth.guard';
import { AddeventComponent } from './addevent/addevent.component';
import { AddgoshalaComponent } from './addgoshala/addgoshala.component';
import { AddvillageComponent } from './addvillage/addvillage/addvillage.component';
import { HindusworldOrganizationComponent } from './hindusworld-organization/hindusworld-organization.component';
import { AddMoreTempleDataComponent } from './add-more-temple-data/add-more-temple-data.component';
import { VillageAddMoreDataComponent } from './village-add-more-data/village-add-more-data.component';
import { EventAddMoreDataComponent } from './event-add-more-data/event-add-more-data.component';
import { GoshalaAddMoreDataComponent } from './goshala-add-more-data/goshala-add-more-data.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TourismComponent } from './tourism/tourism.component';
import { WelfareHomesComponent } from './welfare-homes/welfare-homes.component';
import { AddTourismComponent } from './add-tourism/add-tourism.component';
import { TourOperatorsComponent } from './tour-operators/tour-operators.component';
import { HotelsComponent } from './hotels/hotels.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { TourGuidesComponent } from './tour-guides/tour-guides.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { VetHospitalsComponent } from './vet-hospitals/vet-hospitals.component';
import { PoojastoresComponent } from './poojastores/poojastores.component';
import { BloodBanksComponent } from './blood-banks/blood-banks.component';
export const routes: Routes = [
    {path: '', redirectTo: 'temples', pathMatch: 'full'},
    {path: 'header', component: HeaderComponent},
    {path: 'temples', component: TemplesComponent},
    {path: 'events', component: EventsComponent,canActivate: [authGuard]},
    {path: 'goshalas', component: GoshalasComponent, canActivate: [authGuard],},
    {path: 'edit_temple/:id', component: EditTempleComponent},
    {path: 'villages', component: VillagesComponent,canActivate: [authGuard]},
    {path:'editgoshala/:id',component:EditGoshalaComponent},
    {path: 'edit_village/:id', component: EditVillageComponent},
    {path: 'edit_event/:id', component: EditEventComponent},
    {path: 'addtemple', component: AddtempleComponent},
    {path:'addevent', component: AddeventComponent},
    {path: 'addgoshala', component: AddgoshalaComponent},
    {path: 'addvillage', component: AddvillageComponent},
    {path:'organizations',component:HindusworldOrganizationComponent},
    {path:'Temple-added-data',component:AddMoreTempleDataComponent},
    {path:'village-added-data',component:VillageAddMoreDataComponent},
    {path:'event-added-data',component:EventAddMoreDataComponent},
    {path:'goshala-added-data',component:GoshalaAddMoreDataComponent},
    {path:'dashboard',component:DashboardComponent,canActivate: [authGuard]},
    {path:"Tourism",component:TourismComponent,canActivate: [authGuard]},
    {path:"Welfare home",component:WelfareHomesComponent,canActivate: [authGuard]},
    {path:"Add Tourism",component:AddTourismComponent,canActivate: [authGuard]},

    {path:'Tour-Operators',component:TourOperatorsComponent,canActivate: [authGuard]},
    {path:'Hotels',component:HotelsComponent,canActivate: [authGuard]},
    {path:'Restaurants',component:RestaurantsComponent,canActivate: [authGuard]},
    {path:'Tour Guides',component:TourGuidesComponent,canActivate: [authGuard]},
    {path:'hospitals',component:HospitalsComponent,canActivate: [authGuard]},
    {path:'vet-hospital',component:VetHospitalsComponent,canActivate: [authGuard]},
    {path:'pooja-stores',component:PoojastoresComponent,canActivate: [authGuard]},
    {path:'Blood-banks',component:BloodBanksComponent,canActivate: [authGuard]}

    

];
