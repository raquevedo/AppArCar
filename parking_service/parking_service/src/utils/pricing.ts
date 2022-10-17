

export function calculateTotalPrice(hours:number, priceHour:number, price6Hour:number, price12Hour:number, price24Hours:number) {
    
    let total = 0 
    while(hours > 0){

        if (hours == 1){
          total += priceHour
          hours -= 1
        }else {
          if (hours <= 6){
            total += price6Hour
            hours = 0 
          }else{
            if (hours <= 12){
              total += price12Hour
              hours = 0 
            }else{
              if (hours <= 24){
                total += price24Hours
                hours -= 24
              }
              }
            }
          }
        }

    return total 
  }

