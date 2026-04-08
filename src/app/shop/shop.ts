import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'app-shop',
  imports: [FormsModule, NzSelectModule],
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop {
selectedValue = null

filterActive = false
openFilter(){
this.filterActive = !this.filterActive
}
}
