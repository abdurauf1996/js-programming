function findeGrade(baxo) {
  if (baxo >= 90) {
    return "SIZ OLDIZ A";
  } else if (baxo < 90 && baxo >= 80) {
    return "SIZ OLDIZ B";
  } else if (baxo < 80 && baxo >= 70) {
    return "SIZ OLDIZ C";
  } else if (baxo < 70 && baxo >= 50) {
    return "SIZ OLDIZ D";
  } else if (baxo < 50 && baxo >= 0) {
    return "SIZ OLDIZ F";
  } else {
    return "siz oqishdan xaydaldiz";
  }
}
console.log(findeGrade(80));
