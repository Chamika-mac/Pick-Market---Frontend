import { Item } from './../model/item';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const headeroption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8083/';

  itemAddToCart = [];
  itemCode: string = "ABC011";

  //Get all idems
  getAllItems() {
    return this.http.get(this.url + 'item/getAll');
  }

  //Add item
  addItem(item: Item) {
    return this.http.post(this.url + 'item/newItem', JSON.stringify(item), headeroption);
  }

  //get item by item ID
  getItemById() {
    return this.http.get(this.url + 'item/' + this.itemCode);
  }
}
