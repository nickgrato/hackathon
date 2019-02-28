import { OnInit } from '@angular/core';
import { MotorcycleTypes } from './enums/motorcycle-types.enum';
import { AccessoryTypes } from './enums/accessory-types.enum';

export class UserService implements OnInit {
    
    perferredTheme: any;
    perferredMotorcycle: MotorcycleTypes;
    perferredaccesory: AccessoryTypes;
    ngOnInit() {
        // set user preferrred theme, motorcycles, accessories, etc..
    }

    readFile() {
        // read from file to get perferences
    }

    setTheme(theme: any) {
        this.perferredTheme = theme;
    }

    setMotorcycle(motorcycle: MotorcycleTypes) {
        this.perferredMotorcycle = motorcycle;
    }

    setAccessory(accessory: AccessoryTypes) {
        this.perferredaccesory = accessory;
    }
}