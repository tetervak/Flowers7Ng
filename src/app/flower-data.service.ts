import {Flower} from './flower';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FlowerCatalog} from './flower-catalog/flower-catalog';
import {FlowerCatalogItem} from './flower-catalog/flower-catalog-item';
import catalog from '../assets/data/flower-catalog.json';
@Injectable({
  providedIn: 'root',
})
export class FlowerDataService {
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
    this.flowers = [];
    this.largeImages = [];
    this.processFlowerCatalog(catalog);
  }
  private readonly flowers: Flower[];
  // noinspection JSMismatchedCollectionQueryUpdate
  private largeImages: HTMLImageElement[];
  private httpClient: HttpClient;
  private static item2Flower(id: number, item: FlowerCatalogItem): Flower {
    const flower = new Flower();
    flower.id = id;
    flower.name = item.name;
    flower.label = item.label;
    flower.price = item.price;
    flower.description = item.description;
    flower.largeImgSrc = 'assets/images/flowers/' + item.picture.large;
    flower.smallImgSrc = 'assets/images/flowers/' + item.picture.small;
    return flower;
  }
  // get the list of the Flower objects
  public getFlowers(): Flower[] {
    return this.flowers;
  }

  private processFlowerCatalog(flowerCatalog: FlowerCatalog) {
    const items = flowerCatalog.flowers;
    items.forEach(
      (item: FlowerCatalogItem, index: number) =>
        this.flowers.push(FlowerDataService.item2Flower(index, item)));
    this.preloadLargeImages();
  }
  // preload the large images from the server
  private preloadLargeImages() {
    this.flowers.forEach(flower => {
      const image: HTMLImageElement = new Image();
      image.src = flower.largeImgSrc;
      this.largeImages.push(image);
    });
  }
}
