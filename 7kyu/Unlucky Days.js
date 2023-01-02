function unluckyDays(year){
    let unlucky = 0;
    for (x = 0; x < 12; x++) {
      unlucky += new Date(year, x, 13).getDay() === 5 ? 1 : 0;
    }
    return unlucky;
  }