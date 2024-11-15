import React from 'react'

export const getDate = (date) => {

    const objetDate = new Date(date)
    const today = new Date()
    const month = objetDate.getMonth()
    const day = objetDate.getDay()
    const year = objetDate.getFullYear()
    const monthT = today.getMonth()
    const dayT = today.getDay()
    const yearT = today.getFullYear()
    
    if(day == dayT && month ==monthT && year == yearT){
        const hour = objetDate.getHours()
        let hourT = ""
        if(hour == 0) {
            const minutes = objetDate.getMinutes()
            hourT = `${minutes}m`
        }else {
            hourT = `${hour}h`
        }
        return hourT
    }else{
       const objetMonth = {
        0 : "Jan",
        1: "Feb",
        2: "Mar",
        3: "Apr",
        4: "May",
        5: "Jun",
        6: "Jul",
        7: "Aug",
        8: "Sep",
        9: "Oct",
        10: "Nov",
        11: "Dec"
       }
       let dayTwo = day < 10 ? "0"+day : day
       return `${objetMonth[month]} ${dayTwo}`
    }
    
    
    console.log()
    console.log(todayMonth)

 
}
