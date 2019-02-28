import { MotorcycleTypes } from './enums/motorcycle-types.enum';
import { AccessoryTypes } from './enums/accessory-types.enum';

export class User {
    public userId: number;
    public theme: any;
    public motorcycleType: MotorcycleTypes;
    public accessoryType: AccessoryTypes;
    public timeSpent: number;
}