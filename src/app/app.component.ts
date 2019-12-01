import {Component, OnInit} from '@angular/core';
import {Flower} from './flower';
import {FlowerDataService} from './flower-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'Flowers 6 Ng';
  public flowerList: Flower[];
  public selectedFlower: Flower;
  private flowerDataService: FlowerDataService;
  constructor(flowerDataService: FlowerDataService) {
    this.flowerDataService = flowerDataService;
  }
  ngOnInit(): void {
    this.flowerDataService.getFlowerData().subscribe(
      flowers => {
        if (flowers.length > 0) {
          this.flowerList = flowers;
          this.selectFlower(flowers[0]);
          console.log('data received');
          console.log(flowers);
        }
      });
  }
  // show the flower
  public selectFlower(flower: Flower) {
    this.selectedFlower = flower;
  }
}

