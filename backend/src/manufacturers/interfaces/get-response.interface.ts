export interface GetManufacturerResponse {
  Count: number;
  Message: string;
  SearchCriteria: null;
  Results: Result[];
}

export interface Result {
  Country: string;
  Mfr_CommonName: null | string;
  Mfr_ID: number;
  Mfr_Name: string;
  VehicleTypes: VehicleType[];
}

export interface VehicleType {
  IsPrimary: boolean;
  Name: Name;
}

export enum Name {
  Bus = 'Bus',
  IncompleteVehicle = 'Incomplete Vehicle',
  LowSpeedVehicleLSV = 'Low Speed Vehicle (LSV)',
  Motorcycle = 'Motorcycle',
  MultipurposePassengerVehicleMPV = 'Multipurpose Passenger Vehicle (MPV)',
  OffRoadVehicle = 'Off Road Vehicle',
  PassengerCar = 'Passenger Car',
  Trailer = 'Trailer',
  Truck = 'Truck',
}
