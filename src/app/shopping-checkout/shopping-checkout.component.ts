import { ToastrService } from 'ngx-toastr';
import { ItemService } from './../service/item.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-checkout',
  templateUrl: './shopping-checkout.component.html',
  styleUrls: ['./shopping-checkout.component.css']
})
export class ShoppingCheckoutComponent implements OnInit {

  constructor(private itemService: ItemService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadCheckout();
  }

  addToCartArray = [];
  myItem: string = "ABC011";

  loadCheckout() {
    this.itemService.itemCode = this.myItem;
    this.itemService.getItemById().subscribe((data: any) => {
      console.log(data);

      this.addToCartArray = data;
    });
  }

}
