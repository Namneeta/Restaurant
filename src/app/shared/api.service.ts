import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) {}

    //Now I Will used the POST,GET ,PUT ,DELETE method

    //Create Resturant Using Post Method
   postRestaurent(data:any){
     return this._http.post<any>("http://localhost:3000/posts",data).pipe(map((res:any) => {
       return res;
     }))
   } 

   //Get  Restaurant data using Get Method

   getRestaurant(){
     return this._http.get<any>("http://localhost:3000/posts").pipe(map((res:any) => {
       return res;
     }))
   }

   //Update Restaurant data 
   updateRestaurant(id:number,data:any){
    return this._http.put<any>("http://localhost:3000/posts/"+id,data).pipe(map((res:any) => {
      return res;
    }))
   }

   //Delete Restaurant Data

   deleteRestaurant(id:number){
     return this._http.delete<any>("http://localhost:3000/posts/"+id).pipe(map((res:any) =>{
       return res;
     }))
   }
   
}
