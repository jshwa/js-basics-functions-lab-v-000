// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  if (location > 45) {
    return location - 44;
  } else if (location < 45)
    return 44 - location;
}
