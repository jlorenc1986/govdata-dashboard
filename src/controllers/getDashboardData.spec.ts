import IDataResponse from "../interfaces/IDataResponse"
import axios from "axios"
import { getDashboardData } from "./getDashboardData";
import * as mockResponse  from '../constants/mockApiResponse.json'
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

it('should return proper data', async () => {

// Provide the data object to be returned
    mockedAxios.get.mockResolvedValue(mockResponse);
    console.log('mock response', mockResponse.result);
    

    const got: IDataResponse[] = await getDashboardData();


    expect(1).toEqual(got);
})
