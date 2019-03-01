import { MotorcycleTypes } from './enums/motorcycle-types.enum';
import { AccessoryTypes } from './enums/accessory-types.enum';

export class User {
    public userId: number;
    public theme: any;
    public motorcycleType: MotorcycleTypes[] = new Array<MotorcycleTypes>();
    public accessoryType: AccessoryTypes[] = new Array<AccessoryTypes>()
    public timeSpent: number;
}