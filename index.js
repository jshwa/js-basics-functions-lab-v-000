// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  return Math.abs(location - 42)
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location)*264
}

function distanceTravelledInFeet(start, end) {
  const dist = Math.abs(start-end)
  return dist * 264
}

function calculatesFarePrice(start, destination) {
  const dist = distanceTravelledInFeet(start, destination)

  switch (true) {
    case dist < 400:
      return 0;
  }
}
