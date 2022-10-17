

export function calculateTotalPrice(hours:number, priceHour:number, price6Hour:number, price12Hour:number, price24Hours:number) {
    
    let total = 0 
    while(hours > 0){

        if (hours == 1){
          console.log("Pagar 1 hora ")
          total += priceHour
          hours -= 1
        }else {
          if (hours <= 6){
            console.log("Paga estadia por 6 horas")
            total += price6Hour
            hours = 0 
          }else{
            if (hours <= 12){
              console.log("paga estadia por 12 horas")
              total += price12Hour
              hours = 0 
            }else{
              if (hours <= 24){
                console.log("Paga estadia por 24 horas + el diferencial")
                total += price24Hours
                hours -= 24
              }
              }
            }
          }
        }

    return total 
  }

