import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arabicNumber'
})
export class ArabicNumberPipe implements PipeTransform {
  transform(value: any): string {
    const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    const stringValue = value.toString();
    let result = '';

    for (const digitChar of stringValue) {
      const digit = parseInt(digitChar, 10);
      result += isNaN(digit) ? digitChar : arabicDigits[digit];
    }

    return result;
  }
}

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  formData = {

    alanbar: '',
    hit: '',
    sub_district: '',
    piece_number: '',
    district_name: '',

    sex: '',
    class: '',
    meter: 0 ,
    olk: 0,
    dunum: 0,
    all_aera: 0,
    area_difference: '',

    previous: '',
    additive: '',
    for_his: '',

    land_meter_price: 0,
    building_meter_price: 0,
    building_erea: 0,

    all_land_price: 0,
    all_build_price: 0,
    all_land_price_str: '',
    all_build_price_str: '',
    all_price_str:'',
    all_price: 0,
    paragraph: '',

    value_on_death: 0,
    value_on_death_str:'',
    note: '',

    type_k: '',
    is_has_building: '',
    is_has_tree:'',
    is_has_value_on_dith: '',

    land_dunum_price:0,
    land_dunum_price_str:'',

    land_dunum_tree_price:0,

    all_land_dunum_tree_price:0,
    all_land_dunum_tree_price_str:'',

  };


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.formData.alanbar = params['alanbar'];
      this.formData.hit = params['hit'];
      this.formData.sub_district = params['sub_district'];
      this.formData.piece_number = params['piece_number'];
      this.formData.district_name = params['district_name'];

      this.formData.sex = params['sex'];
      this.formData.class = params['class'];
      this.formData.meter = params['meter'];
      this.formData.olk = params['olk'];
      this.formData.dunum = params['dunum'];
      this.formData.area_difference = params['area_difference'];

      this.formData.previous = params['previous'];
      this.formData.additive = params['additive'];
      this.formData.for_his = params['for_his'];
      // طباعة قيمة الارض
      this.formData.all_land_price = params['all_land_price'];
      this.formData.all_land_price_str = params['all_land_price_str'];
      // طباعة قيمة المشيدات
      this.formData.all_build_price_str = params['all_build_price_str'];
      this.formData.all_build_price = params['all_build_price'];

      this.formData.all_price_str = params['all_price_str'];
      this.formData.all_price = parseInt(params['all_build_price']) + parseInt(params['all_land_price']) + parseInt(params['all_land_dunum_tree_price']);
      this.formData.value_on_death = params['value_on_death'];
      this.formData.value_on_death_str = params['value_on_death_str'];
      this.formData.paragraph = params['paragraph'];

      this.formData.land_meter_price = params['land_meter_price'];
      this.formData.building_meter_price = params['building_meter_price'];
      this.formData.note = params['note'];

      this.formData.type_k = params['type_k'];
      this.formData.is_has_building = params['is_has_building'];
      this.formData.is_has_tree = params['is_has_tree'];
      this.formData.is_has_value_on_dith = params['is_has_value_on_dith'];

      this.formData.land_dunum_price = params['land_dunum_price'];
      this.formData.land_dunum_tree_price = params['land_dunum_tree_price'];
      this.formData.all_land_dunum_tree_price = params['all_land_dunum_tree_price'];
      this.formData.all_land_dunum_tree_price_str = params['all_land_dunum_tree_price_str'];



    });

  }

  ngAfterViewInit() {
    window.print();
  }

}
