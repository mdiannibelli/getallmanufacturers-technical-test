export interface GetManufacturerResponse {
  count: number;
  message: string;
  searchCriteria: null;
  results: Manufacturers[];
}

export interface Manufacturers {
  country: string;
  commonName: null | string;
  id: number;
  name: string;
  vehicleTypes: VehicleType[];
}

export interface VehicleType {
  isPrimary: boolean;
  name: Name;
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
