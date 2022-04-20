import { IBaseEntity } from "./base-entity.interface";

export interface IVehicle extends IBaseEntity {
  make: string;
  model: string;
  power: number;
  firstRegistration: string;
  fuel: string;
  consumptionUnit: string;
  consumptionCombined: string;
  mileage: number;
  co2: number;
  price: number;
  image: string;
  monthlyInstallment: number;
  gearbox: string;
  condition: string;
  variant: string;
  category: string;
  exteriorColor: string;
  cubicCapacity: number;
  fourWheelDrive: boolean;
  images: string[];
}
