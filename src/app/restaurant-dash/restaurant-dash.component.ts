import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { RestaurantData } from './restaurant.modal';

@Component({
  selector: 'app-restaurant-dash',
  templateUrl: './restaurant-dash.component.html',
  styleUrls: ['./restaurant-dash.component.css']
})
export class RestaurantDashComponent implements OnInit {

  formValue !: FormGroup;
  restaurantModalObj :RestaurantData = new RestaurantData;
  allRestaurantData : any;
  showAdd!:boolean;
  showbtn!:boolean;
  

  constructor( private formBuilder : FormBuilder , private api:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      address: [''],
      services: ['']
    })
     this.getAllData()
  }

  clickAddResto(){
    this.formValue.reset();
    this.showAdd = true;
    this.showbtn = false;
  }
  //now we subscribe our data  which is maped by services 
  addRestaurant(){
    this.restaurantModalObj.name = this.formValue.value.name;
    this.restaurantModalObj.email = this.formValue.value.email;
    this.restaurantModalObj.mobile = this.formValue.value.mobile;
    this.restaurantModalObj.address = this.formValue.value.address;
    this.restaurantModalObj.services = this.formValue.value.services;

    this.api.postRestaurent(this.restaurantModalObj).subscribe(res =>{
      console.log(res);
      alert("Restaurant record Added Successfully ");

      let ref = document.getElementById('clear');
      ref?.click();
      this.formValue.reset()
      this.getAllData();

    },
    err=>
    {
      alert("Not Added Records");
    }
      
    )


  }

  getAllData(){
    this.api.getRestaurant().subscribe(res=>{
      this.allRestaurantData = res ;
    })
  }
  
  deleteResto(data:any){
    this.api.deleteRestaurant(data.id).subscribe(res=>{
       alert("Restaurant Records Delete Successfully");
       this.getAllData();
    })
  }
  onEditRestaurant(data: any){
    this.showAdd = false;
    this.showbtn = true;
    this.restaurantModalObj.id = data.id;
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['mobile'].setValue(data.mobile);
    this.formValue.controls['address'].setValue(data.address);
    this.formValue.controls['services'].setValue(data.services);
  }

  updateRestaurant(){
    this.restaurantModalObj.name = this.formValue.value.name;
    this.restaurantModalObj.email = this.formValue.value.email;
    this.restaurantModalObj.mobile = this.formValue.value.mobile;
    this.restaurantModalObj.address = this.formValue.value.address;
    this.restaurantModalObj.services = this.formValue.value.services;

     this.api.updateRestaurant(  this.restaurantModalObj.id , this.restaurantModalObj ).subscribe(res =>{
       alert("The record Udate succesfully");
       let ref = document.getElementById('clear');
       ref?.click();
       this.formValue.reset()
       this.getAllData();
     })  
    
  }

}
