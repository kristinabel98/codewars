function handAngle(date) {
    let angle = Math.abs((date.getHours() % 12) * 30 + date.getMinutes() / 2 - date.getMinutes() * 6);
    if (angle > 180) {
      angle = 360 - angle;
    }
    return angle / 180 * Math.PI;
  }