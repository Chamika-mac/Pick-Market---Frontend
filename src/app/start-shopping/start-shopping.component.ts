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

  constructor(private itemService: ItemService, private toastr: ToastrService) { }

  item: Item = {
    itemCode: '',
    itemName: '',
    itemPrice: '',
    itemDescription: '',
  }

  ngOnInit(): void {
    this.getAllItems();

  }

  getAllItems() {
    this.itemService.getAllItems().subscribe((data: any) => {
      console.log(data);

      this.item.itemCode = data.itemCode;
      this.item.itemName = data.itemName;
      this.item.itemPrice = data.itemPrice;
      this.item.itemDescription = data.itemDescription;

      this.toastr.success("Item Table Loaded Successfully");
    });
  }



}
