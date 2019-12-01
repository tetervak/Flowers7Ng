import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Flower} from '../flower';

@Component({
  selector: 'app-flower-list',
  templateUrl: './flower-list.component.html',
  styleUrls: ['./flower-list.component.css']
})
export class FlowerListComponent {
  public selectedIndex = 0;
  @Input() public flowers: Flower[];
  @Output() public flowerSelected = new EventEmitter();

  public selectFlower(index: number): void {
    this.selectedIndex = index;
    this.flowerSelected.emit(this.flowers[index]);
  }
  public isSelected(index: number) {
    return this.selectedIndex === index;
  }
}
