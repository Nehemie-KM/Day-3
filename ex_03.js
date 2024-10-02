function  fillBus(peopleAtBusStops,busSeats){ 
 let i =  0
 let a = 0
while (i<peopleAtBusStops.length) { 
   a += peopleAtBusStops[i]
 if (a>busSeats) { 

return i 
 }
 


i = i + 1
}

return -1    

}
console.log(fillBus([1, 3, 10, 1], 12))
