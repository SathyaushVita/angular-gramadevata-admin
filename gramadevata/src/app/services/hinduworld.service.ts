import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL1 } from '../../constant';

@Injectable({
  providedIn: 'root'
})
export class HinduworldService {

  constructor(private httpclient: HttpClient) { }


    // getorganizations():Observable<any>{
    //   return this.httpclient.get(URL1+"admin_organization")
    // }


      getorganizations(search: string = '', ): Observable<any> {
    return this.httpclient.get(`${URL1}admin_organization`, {
      params: {

      search: search,
      }
    });
  }

      getorganizationsbyid(id:string):Observable<any>{
      return this.httpclient.get(URL1+"admin_organization/"+id)
    }

    updateOrganization(id: string, data: any): Observable<any> {
  return this.httpclient.put(URL1 + "admin_organization/" + id , data);
}


  getCategories():Observable<any>{
    return this.httpclient.get(URL1+"category")   
  }

        getorganizationsubCategories(_id:string):Observable<any>{
        return this.httpclient.get(URL1+"category/"+_id+"/subcategories")   
      }



            Deleteorganization(id:string):Observable<any>{
      return this.httpclient.delete(URL1+"admin_organization/"+id)
    }

}
