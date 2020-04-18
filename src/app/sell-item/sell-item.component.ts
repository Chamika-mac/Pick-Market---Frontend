import { ToastrService } from 'ngx-toastr';
import { ItemService } from './../service/item.service';
import { Item } from './../model/item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sell-item',
  templateUrl: './sell-item.component.html',
  styleUrls: ['./sell-item.component.css']
})
export class SellItemComponent implements OnInit {

  item: Item = {
    itemCode: '',
    itemName: '',
    itemPrice: '',
    itemDescription: '',
  }

  constructor(private itemService: ItemService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  addItem() {
    if (this.item.itemCode == "") {
      this.toastr.warning("Item Code is Required");
    }
    else if (this.item.itemName == "") {
      this.toastr.warning("Item Name is Required");
    }
    else if (this.item.itemPrice == "") {
      this.toastr.warning("Item Price is Required");
    }
    else if (this.item.itemDescription == "") {
      this.toastr.warning("Item Description is Required");
    }
    else {
      this.itemService.addItem(this.item).subscribe((data: any) => {
        console.log(data);
        this.toastr.success("Item Added Successfull");
      });
    }
  }



}
