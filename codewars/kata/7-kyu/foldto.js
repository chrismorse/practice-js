// https://www.codewars.com/kata/folding-your-way-to-the-moon/train/javascript

function foldTo(distance) {
  const paperWidth = .0001;
  
  let folds = 0;
  distanceLeft = distance;
  
  if (distanceLeft <= 0)
    return null;

  while (distanceLeft >= paperWidth) {
    folds++;
    distanceLeft = distanceLeft / 2;
  }
  
  return folds;
}