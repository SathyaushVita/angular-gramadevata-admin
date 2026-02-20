import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL } from '../../constant';

@Injectable({
  providedIn: 'root'
})
export class TempleService {

  constructor(private httpclient: HttpClient) { }

   getalltemples( page: number = 1):Observable<any>{
    return this.httpclient.get(URL+"temple_inactive")
  }

  getbytemple(_id:string):Observable<any>{
    return this.httpclient.get(URL+"templeget/_id/"+ _id)
  }


  

  updatetemple(_id:string):Observable<any>{
    return this.httpclient.get(URL+"temple_inactive_get/_id/"+ _id)
  }


  getallcategories(): Observable<any>{
    return this .httpclient.get(URL+ "templeCategeory")
  }

  filterTemple(categoryId:string, locationId: string, page: number = 1): Observable<any>{
    console.log('abcdefghrt')
    return this.httpclient.get(`${URL}locationByTemples/`,{
      
      params: {
        category: categoryId,
        input_value: locationId,
        page: page.toString(),
      }
    })
  }

  updateTempleDetails(templeId: string, templeData: any): Observable<any> {
    const updateUrl = `${URL}temple/${templeId}`;  // Assuming the temple ID is passed in the URL
    return this.httpclient.put(updateUrl, templeData);
  }
  


  

  GetAllCountries():Observable<any>{
    return this.httpclient.get(URL+"country")
  }


  getbyStates(_id:string):Observable<any> {
    console.log("statessssssssssssssssssssssssssssssssssssssssssssssssssssssss")
    return this.httpclient.get(URL+"state?country="+_id)
  }
  // getbyStates(countryId: string): Observable<any> {
  //   console.log("Fetching states for country ID:", countryId);
  //   return this.httpclient.get(`http://127.0.0.1:8000/gramadevata/state?country=${countryId}`);
  // }
  
 
  getdistricts(_id:string):Observable<any>{
    console.log("districtttttttttt")
    return this.httpclient.get(URL+"district?state="+_id)
  }

  getblocks(_id:string):Observable<any>{
    console.log("blockkkkkkkkkkk")
    return this.httpclient.get(URL+"block?district_id="+_id)
  }
  
  getvillages(_id:string):Observable<any>{
    return this.httpclient.get(URL+"village?block="+_id)
  }

  getTempleCategorybyId(_id:string):Observable<any>{
    return this.httpclient.get(URL+'templeCategeory?_id='+_id)
  }

  getpriority():Observable<any>{
    return this.httpclient.get(URL+"templepriority")
  }

  GetallCategories():Observable<any>{   
    return this.httpclient.get(URL+"templeCategeory")
  }
  

  filterinactiveemple(categoryId:string, locationId: string, page: number = 1): Observable<any>{
    return this.httpclient.get(`${URL}InactivelocationByTemples`,{
      params: {
        category: categoryId,
        input_value: locationId,
        page: page.toString(),
      }
    })
  }

  addTemple(templeData: any): Observable<any> {
    return this.httpclient.post(URL+"temple", templeData);
  }

  Templeaddmoredata():Observable<any>{
    return this.httpclient.get(URL+"add_more_temple_details")
  }

    villageddmoredata():Observable<any>{
    return this.httpclient.get(URL+"add_more_village_details")
  }

    goshaladdmoredata():Observable<any>{
    return this.httpclient.get(URL+"add_more_goshala_details")
  }

      eventaddmoredata():Observable<any>{
    return this.httpclient.get(URL+"add_more_event_details")
  }


  Mergetempledata(templeId: string, templeData: any): Observable<any> {
    const updateUrl = `${URL}templemerge/${templeId}/`;  // Assuming the temple ID is passed in the URL
    return this.httpclient.put(updateUrl, templeData);
  }


    Mergevillagedata(templeId: string, templeData: any): Observable<any> {
    const updateUrl = `${URL}mergevillage/${templeId}/`;  // Assuming the temple ID is passed in the URL
    return this.httpclient.put(updateUrl, templeData);
  }

      Mergeeventdata(templeId: string, templeData: any): Observable<any> {
    const updateUrl = `${URL}eventmerge/${templeId}`;  // Assuming the temple ID is passed in the URL
    return this.httpclient.put(updateUrl, templeData);
  }

        Mergegoshaladata(templeId: string, templeData: any): Observable<any> {
    const updateUrl = `${URL}goshalamerge/${templeId}`;  // Assuming the temple ID is passed in the URL
    return this.httpclient.put(updateUrl, templeData);
  }





  gettourismbylocation(_id:string):Observable<any>{
    return this.httpclient.get(URL+"tourism/"+ _id)
  }

  
  addTempletourismplaces(templeData: any): Observable<any> {
    return this.httpclient.post(URL+"tourism", templeData);
  }
  updateTempletourismplaces(id: string, data: any): Observable<any> {
  return this.httpclient.put(URL + 'tourism/' + id, data);
}


////////////////////////////////////////registration forms///////////////////////////

  getInactiveRestaurants(): Observable<any> {
    return this.httpclient.get(URL + 'inactive_restaurants');
  }

  // Get single restaurant by ID
  getInactiveRestaurantById(id: string): Observable<any> {
    const params = new HttpParams().set('_id', id);
    return this.httpclient.get(URL + 'inactive_restaurants', { params });
  }

    getInactivepooj(): Observable<any> {
    return this.httpclient.get(URL + 'inactive_poojastores');
  }

  // Get single restaurant by ID
  getInactivepoojaById(id: string): Observable<any> {
    const params = new HttpParams().set('_id', id);
    return this.httpclient.get(URL + 'inactive_poojastores', { params });
  }


      getInactivehospitals(): Observable<any> {
    return this.httpclient.get(URL + 'inactive_hospitals');
  }

  // Get single restaurant by ID
  getInactivehospitalById(id: string): Observable<any> {
    const params = new HttpParams().set('_id', id);
    return this.httpclient.get(URL + 'inactive_hospitals', { params });
  }


        getInactivevethospitals(): Observable<any> {
    return this.httpclient.get(URL + 'inactive_veterinary_hospitals');
  }

  // Get single restaurant by ID
  getInactivevethospitalById(id: string): Observable<any> {
    const params = new HttpParams().set('_id', id);
    return this.httpclient.get(URL + 'inactive_veterinary_hospitals', { params });
  }

        getInactivehotel(): Observable<any> {
    return this.httpclient.get(URL + 'inactive_hotel');
  }

  // Get single restaurant by ID
  getInactivehotelById(id: string): Observable<any> {
    const params = new HttpParams().set('_id', id);
    return this.httpclient.get(URL + 'inactive_hotel', { params });
  }

          getInactivetouroperator(): Observable<any> {
    return this.httpclient.get(URL + 'inactive_touroperators');
  }

  // Get single restaurant by ID
  getInactiveouroperatorById(id: string): Observable<any> {
    const params = new HttpParams().set('_id', id);
    return this.httpclient.get(URL + 'inactive_touroperators', { params });
  }


            getInactivetourguide(): Observable<any> {
    return this.httpclient.get(URL + 'inactive_tour_guide');
  }

  // Get single restaurant by ID
  getInactivetourguideById(id: string): Observable<any> {
    const params = new HttpParams().set('_id', id);
    return this.httpclient.get(URL + 'inactive_tour_guide', { params });
  }

              getInactivebloodbank(): Observable<any> {
    return this.httpclient.get(URL + 'inactive_bloodbanks');
  }

  // Get single restaurant by ID
  getInactivebloodbankById(id: string): Observable<any> {
    const params = new HttpParams().set('_id', id);
    return this.httpclient.get(URL + 'inactive_bloodbanks', { params });
  }
}
