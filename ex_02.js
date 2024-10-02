function findHousing(housingToFind, index) {
    let i = 0
    let lol = null
  
  while (i < index.length) {
    if (index[i].toLowerCase() === housingToFind.toLowerCase()) {
      lol = i
      break
    }
    i = i + 1
  
    
    
      
      }
        if (lol !== null) { 
      return [lol, housingToFind]; 
  } else {
      return [-1, null];  
  }
    }
  
  
  let result = findHousing("House", ["Flat", "House", "Hut", "House", "Igloo"])
  displayResult(result)