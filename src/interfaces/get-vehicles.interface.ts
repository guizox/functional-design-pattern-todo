import { IPaginatedInterface } from "./paginated.interface";
import { IVehicle } from "./vehicle.interface";

export interface IGetVehicles {
  getVehiclesInputType: IPaginatedInterface;
}

export interface IGetVehiclesResponse {
  getPaginatedVehicles: {
    data: IVehicle[];
    afterCursor: string;
  };
}

export interface IGetVehiclesByIdResponse {
  vehicle: IVehicle;
}
