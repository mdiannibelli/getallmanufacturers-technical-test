import { Test, TestingModule } from '@nestjs/testing';
import { ManufacturerController } from './manufacturer.controller';
import { ManufacturerService } from './manufacturers.service';
import {
  GetManufacturerResponse,
  Name,
} from './interfaces/get-response.interface';
import { HttpException, HttpStatus } from '@nestjs/common';

describe('ManufacturerController', () => {
  let controller: ManufacturerController;

  const mockManufacturerService = {
    getManufacturers: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManufacturerController],
      providers: [
        {
          provide: ManufacturerService,
          useValue: mockManufacturerService,
        },
      ],
    }).compile();

    controller = module.get<ManufacturerController>(ManufacturerController);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getManufacturers', () => {
    it('should return manufacturers when service returns data', async () => {
      const mockResponse: GetManufacturerResponse = {
        Count: 2,
        Message: 'Response returned successfully',
        SearchCriteria: null,
        Results: [
          {
            Country: 'UNITED STATES (USA)',
            Mfr_CommonName: 'Tesla',
            Mfr_ID: 955,
            Mfr_Name: 'TESLA, INC.',
            VehicleTypes: [
              {
                IsPrimary: true,
                Name: Name.PassengerCar,
              },
            ],
          },
          {
            Country: 'GERMANY',
            Mfr_CommonName: 'BMW',
            Mfr_ID: 956,
            Mfr_Name: 'BMW GROUP',
            VehicleTypes: [
              {
                IsPrimary: true,
                Name: Name.PassengerCar,
              },
            ],
          },
        ],
      };

      mockManufacturerService.getManufacturers.mockResolvedValue(mockResponse);

      const result = await controller.getManufacturers();
      expect(result).toEqual(mockResponse);
      expect(mockManufacturerService.getManufacturers).toHaveBeenCalledTimes(1);
      expect(mockManufacturerService.getManufacturers).toHaveBeenCalledWith();
    });

    it('should throw HttpException when service returns empty results', async () => {
      const mockEmptyResponse: GetManufacturerResponse = {
        Count: 0,
        Message: 'No results found',
        SearchCriteria: null,
        Results: [],
      };

      mockManufacturerService.getManufacturers.mockResolvedValue(
        mockEmptyResponse,
      );

      await expect(controller.getManufacturers()).rejects.toThrow(
        new HttpException(
          { message: 'No manufacturers found' },
          HttpStatus.NOT_FOUND,
        ),
      );

      expect(mockManufacturerService.getManufacturers).toHaveBeenCalledTimes(1);
    });

    it('should throw HttpException when service returns null results', async () => {
      const mockNullResponse = {
        Count: 0,
        Message: 'No results found',
        SearchCriteria: null,
        Results: null,
      };

      mockManufacturerService.getManufacturers.mockResolvedValue(
        mockNullResponse,
      );

      await expect(controller.getManufacturers()).rejects.toThrow(
        new HttpException(
          { message: 'No manufacturers found' },
          HttpStatus.NOT_FOUND,
        ),
      );

      expect(mockManufacturerService.getManufacturers).toHaveBeenCalledTimes(1);
    });

    it('should throw HttpException when service throws an error', async () => {
      const serviceError = new Error('Service error');
      mockManufacturerService.getManufacturers.mockRejectedValue(serviceError);

      await expect(controller.getManufacturers()).rejects.toThrow(serviceError);
      expect(mockManufacturerService.getManufacturers).toHaveBeenCalledTimes(1);
    });
  });
});
