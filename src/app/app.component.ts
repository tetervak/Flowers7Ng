import {Component, OnInit} from '@angular/core';
import {Flower} from './flower';
import {FlowerDataService} from './flower-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'Flowers 7 Ng';
  public flowerList: Flower[];
  public selectedFlower: Flower;
  private flowerDataService: FlowerDataService;
  constructor(flowerDataService: FlowerDataService) {
    this.flowerDataService = flowerDataService;
  }
  ngOnInit(): void {
    this.flowerList = this.flowerDataService.getFlowers();
    this.selectedFlower = this.flowerList[0];
  }
  // show the flower
  public selectFlower(flower: Flower) {
    this.selectedFlower = flower;
  }
}

