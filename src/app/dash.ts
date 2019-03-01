import { Component, OnInit } from '@angular/core';
import { User } from './service/user.view-model';
import { MotorcycleTypes } from './service/enums/motorcycle-types.enum';
import { AccessoryTypes } from './service/enums/accessory-types.enum';
import { Themes } from './service/enums/themes.enum';

@Component({
  selector: 'hack-dash',
  templateUrl: './dash.html',
  styleUrls: ['./dash.scss'],
})
export class DashComponent implements OnInit{
  currentUser: User;
  defaultUser: User = new User();
  user1: User = new User();
  user2: User = new User();
  user3: User = new User();

  ngOnInit() {
    this.defaultUser.userId = 0;
    this.defaultUser.theme = Themes.Default;
    this.defaultUser.motorcycleType = [MotorcycleTypes.Cruiser, MotorcycleTypes.Dirt, MotorcycleTypes.Sport];
    this.defaultUser.accessoryType = [AccessoryTypes.Boots, AccessoryTypes.Exhaust, AccessoryTypes.Gloves, AccessoryTypes.Jackets, AccessoryTypes.Tires];
    this.defaultUser.timeSpent = 0;
    
    this.user1.userId = 1;
    this.user1.theme = Themes.Sport;
    this.user1.motorcycleType = [MotorcycleTypes.Sport, MotorcycleTypes.Cruiser, MotorcycleTypes.Dirt];
    this.user1.accessoryType = [AccessoryTypes.Exhaust, AccessoryTypes.Gloves, AccessoryTypes.Jackets, AccessoryTypes.Tires, AccessoryTypes.Boots];
    this.user1.timeSpent = 60;

    this.user2.userId = 2;
    this.user2.theme = Themes.Dirt;
    this.user2.motorcycleType = [MotorcycleTypes.Dirt, MotorcycleTypes.Sport, MotorcycleTypes.Cruiser];
    this.user2.accessoryType = [AccessoryTypes.Tires, AccessoryTypes.Exhaust, AccessoryTypes.Jackets, AccessoryTypes.Boots, AccessoryTypes.Gloves];
    this.user2.timeSpent = 5;

    this.user3.userId = 3;
    this.user3.theme = Themes.Sport;
    this.user3.motorcycleType = [MotorcycleTypes.Sport, MotorcycleTypes.Dirt, MotorcycleTypes.Cruiser];
    this.user3.accessoryType = [AccessoryTypes.Jackets, AccessoryTypes.Gloves, AccessoryTypes.Boots, AccessoryTypes.Tires, AccessoryTypes.Exhaust];
    this.user3.timeSpent = 30;
  }

  setUser(userId: number) {
    switch(userId) {
      case 1:
        this.currentUser = this.user1;
        break;
      case 2:
        this.currentUser = this.user2;
        break;
      case 3:
        this.currentUser = this.user3;
        break;
      default:
        this.currentUser = this.defaultUser;
        break;
    }
  }
}
