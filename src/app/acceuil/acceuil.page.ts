import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.page.html',
  styleUrls: ['./acceuil.page.scss'],
})
export class AcceuilPage implements OnInit {

  public contact = {
    name:"EDUCATION PARENTALE",
      email:"fotiewarren50@gmail.com",
      tel:"+237 697279939",
      logo:"assets/home-office-336581_1920.jpg",
      location:"assets/home-office-336581_1920.jpg"
  }
  constructor() { }

  ngOnInit() {
  }

}
