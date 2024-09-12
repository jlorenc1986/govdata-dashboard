import IDataResponse from "../interfaces/IDataResponse";

export const reduceToMap = (acc: Map<string,number>, curr: IDataResponse): Map<string,number> => {

    if(acc.has(curr.name)){
         let itemValue = acc.get(curr.name) as number;
         acc.set(curr.name, itemValue + 1)
    }else{
     acc.set(curr.name, 1)
    }  
    
  
     return acc


 }