export function addHours(startTime:string, hours:number) {
    
    let numberOfMlSeconds = Date.parse(startTime)
    let addMlSeconds = hours * 60 * 60000;
    
    return new Date(numberOfMlSeconds + addMlSeconds)
  }

export function diffHours(startTime:string, endTime:string) {
    
    let diffTime = Math.abs(Date.parse(endTime) -  Date.parse(startTime))
    
    return Math.ceil(diffTime/1000/60/60);
  }