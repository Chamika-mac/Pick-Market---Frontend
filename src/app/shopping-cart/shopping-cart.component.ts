import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ItemService } from './../service/item.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private itemService: ItemService, private toastr: ToastrService, private router: Router) { }

  addToCartArray = [];
  myArray: any;

  ngOnInit(): void {
    this.loadAddTOCart();
  }

  loadAddTOCart() {
    this.itemService.getItemById().subscribe((data: any) => {
      console.log(data);
      this.addToCartArray = data;
      
    });

  }

  goToCheckOut() {
    this.router.navigate(['shopping-checkout']);
  }

}
