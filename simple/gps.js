function gps(seconds, distancesFromOrigin) {
  var inHours = 3600 / seconds
  var speeds = []
  for (var i = 0; i<distancesFromOrigin.length; i++) {
    var checkPoint = distancesFromOrigin[i]
    if (i+1 < distancesFromOrigin.length) {
      var nextCheckPoint = distancesFromOrigin[i+1]
      var distance = nextCheckPoint - checkPoint
      speeds.push(distance * inHours)
    }
  }
  var max = 0
  for (var i = 0; i<speeds.length; i++) {
    if (max < speeds[i]) {
      max = speeds[i]
    }
  }
  return max
}

module.exports = gps
