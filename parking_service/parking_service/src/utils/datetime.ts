export function addHours(startTime:string, hours:number) {
    
    let numberOfMlSeconds = Date.parse(startTime)
    let addMlSeconds = hours * 60 * 60000;
    
    return new Date(numberOfMlSeconds + addMlSeconds)
  }

export function diffHours(startTime:string, endTime:string) {
    
    let diffTime = Math.abs(Date.parse(endTime) -  Date.parse(startTime))
    
    return Math.ceil(diffTime/1000/60/60);
  }

export function checkHourStatus(settings: any){
  let date = new Date
  let dayOfWeek = date.getDay();
  let time = String(date.getHours())+":"+String(date.getMinutes())+":"+date.getSeconds();
  let status = 'inactive'
  
  let days = [ {"open": settings.startSunday , "close": settings.endSunday },
             {"open": settings.startMonday, "close": settings.endMonday},
             {"open": settings.startTuesday, "close": settings.endTuesday},
             {"open": settings.startWednesday, "close": settings.endWednesday},
             {"open": settings.startThursday, "close": settings.endThursday},
             {"open": settings.startFriday, "close": settings.endFriday},
             {"open": settings.startSaturday, "close": settings.endSaturday}
              ]
  
  if( time >= days[dayOfWeek].open && time <=  days[dayOfWeek].close ){
    status = 'active'
  }
  console.log("Parking:",settings.idParking," is",status,"because",time, "between",days[dayOfWeek].open, "and",days[dayOfWeek].close)
  return status
}