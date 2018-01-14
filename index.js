// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  switch (true) {
    case location > 45:
      return location - 45;
      break;
    case location < 45:
      return 45 - location;
      break;
  }
}
