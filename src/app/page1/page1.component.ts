import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {
  }


  formData = {
    alanbar: 'الانبار',
    hit: 'هيت',
    sub_district: '',
    piece_number: '',
    district_name: '',

    type_k: '',

    is_has_building: false,
    is_has_tree: false,
    is_has_value_on_dith: false,

    sex: '',
    class: '',
    meter: 0,
    olk: 0,
    dunum: 0,
    all_aera: 0,
    area_difference: '',

    previous: '',
    additive: '',
    for_his: '',

    land_meter_price: 0,
    all_land_price: 0,
    all_land_price_str: '',

    land_dunum_price: 0,

    land_dunum_tree_price: 0,
    all_land_dunum_tree_price: 0,
    all_land_dunum_tree_price_str: '',

    tree_price: 0,
    tree_price_str: '',
    all_tree_price: 0,
    all_tree_price_str: '',

    building_meter_price: 0,
    building_erea: 0,

    all_build_price: 0,
    all_build_price_str: '',

    all_price_str: '',

    distinguish: 0,

    paragraph: '',

    perscentage: 0.0,

    value_on_death: 0,
    value_on_death_str: '',
    note: '',
  };


  getAllMetersNumber() {
    this.formData.all_aera = 0;
    this.formData.all_aera += this.formData.meter;
    this.formData.all_aera += this.formData.olk * 100;
    this.formData.all_aera += this.formData.dunum * 2500;
    console.log("all eara:" + this.formData.all_aera);
    this.allLandMeterPrice();
    this.allLandDunumTreePrice();
  }

  allLandMeterPrice() {
    if (this.formData.type_k == 'A') {
      var x = this.formData.all_aera * this.formData.land_meter_price;
      if (this.formData.distinguish > 0) {
        x = x + (x * (this.formData.distinguish / 100));
      }
      while (x % 100000 != 0) {
        ++x;
      }
      this.formData.all_land_price = x;
    }

    if (this.formData.type_k == 'B') {
      // A
      var x = this.formData.all_aera * (this.formData.land_dunum_price / 2500);
      while (x % 100000 != 0) {
        ++x;
      }
      this.formData.all_land_price = x;
      console.log(this.formData.all_aera)
    }

  }

  allBuildMeterPrice() {
    var x = this.formData.building_erea * this.formData.building_meter_price;
    while (x % 100000 != 0) {
      ++x;
    }
    this.formData.all_build_price = x;
  }

  allLandDunumTreePrice() {
    var x = this.formData.all_aera * (this.formData.land_dunum_tree_price / 2500);
    while (x % 100000 != 0) {
      ++x;
    }
    this.formData.all_land_dunum_tree_price = x;
  }

  passDataToB() {
    const queryParams = this.formData;
    this.router.navigate(['/page2'], { queryParams });
  }

  getPriceOnDeath() {
    var x = (this.formData.all_land_price + this.formData.all_build_price + this.formData.all_land_dunum_tree_price) * (this.formData.perscentage / 100);
    while (x % 100000 != 0) {
      ++x;
    }
    this.formData.value_on_death = x;
  }
  prinModel() {
    this.router.navigate(['/page3']);

  }

  ngOnInit(): void {

  }
}
