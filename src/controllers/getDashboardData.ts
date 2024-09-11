import axios from "axios";
import { SEARCH_DATASET_API } from "../constants/urls";
import IDataResponse from "../interfaces/IDataResponse"


export const getDashboardData = async () : Promise<IDataResponse[]> => {

    const data: IDataResponse[] = [{name:"", count: 0}];

    const response = axios.get(SEARCH_DATASET_API)

    const dataToConvert = (await response).data
    if(dataToConvert.result.results.length > 0) {
        dataToConvert.result.results.forEach((element: { author: string; num_resources: number; }) => {
            console.log('converting')
            data.push({name: element.author, count: element.num_resources})
        });
    }   
   
    return data.sort()
}