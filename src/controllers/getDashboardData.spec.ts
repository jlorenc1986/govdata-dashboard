import IDataResponse from "../interfaces/IDataResponse"
import { getDashboardData } from "./getDashboardData"

it('should return proper data', () => {
  

    const want: IDataResponse = {id: 1};
    const got: IDataResponse = getDashboardData();
  
    expect(got).toEqual(want);
})
