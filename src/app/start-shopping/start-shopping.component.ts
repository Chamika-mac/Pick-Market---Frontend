import { Router } from '@angular/router';
import { Item } from './../model/item';
import { ToastrService } from 'ngx-toastr';
import { ItemService } from './../service/item.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-start-shopping',
  templateUrl: './start-shopping.component.html',
  styleUrls: ['./start-shopping.component.css']
})
export class StartShoppingComponent implements OnInit {

  constructor(private itemService: ItemService, private toastr: ToastrService, private router: Router) { }

  item: Item = {
    itemCode: '',
    itemName: '',
    itemPrice: '',
    itemDescription: '',
  }

  ItemsArray = [];

  ngOnInit(): void {
    this.getAllItems();

  }

  getAllItems() {
    this.itemService.getAllItems().subscribe((data: any) => {
      console.log(data);
      this.ItemsArray = data;

      this.toastr.success("Item Table Loaded Successfully");
    });
  }

  addToCart() {
    // this.itemService.itemAddToCart = this.ItemsArray[0];
    // this.toastr.success("Item Added to cart Successfully");
    this.router.navigate(['shopping-cart']);
  }



}
