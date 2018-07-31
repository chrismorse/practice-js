function flyBy(lamps, drone){

  let newLamps = "";
  
  if (drone.length >= lamps.length)
    newLamps = 'o'.repeat(lamps.length);
  else
    newLamps = 'o'.repeat(drone.length) + 'x'.repeat(lamps.length-drone.length);

  return newLamps;

}