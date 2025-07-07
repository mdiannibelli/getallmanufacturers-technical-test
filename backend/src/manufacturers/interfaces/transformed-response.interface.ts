export interface TransformedResponse {
  count: number;
  message: string;
  searchCriteria: null;
  results: TransformedResult[];
}

export interface TransformedResult {
  country: string;
  commonName: string | null;
  id: number;
  name: string;
  vehicleTypes: Array<{
    isPrimary: boolean;
    name: string;
  }>;
}
