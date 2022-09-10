// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

// Basements (negatives) stay the same as the universal level.


//MY solution

function getRealFloor(n) {
    if (n<=0){
      return n
    }
    if(n>13){
      return n-2
    }
    
    return n-1;
  }
