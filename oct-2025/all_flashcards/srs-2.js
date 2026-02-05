function generateSchedule(numConcepts) {
  const gaps = [2, 4, 8, 15, 15]; // gaps for revision 1-5
  const schedule = [];
  const revisionPositions = {}; // track revision positions

  // Step 1: Place Teach 1 for all concepts (priority order)
  for (let c = 1; c <= numConcepts; c++) {
    schedule.push(`Concept ${c} - Teach 1`);
    revisionPositions[c] = [];
  }

  // Step 2: Schedule 5 revisions per concept using gaps
  for (let c = 1; c <= numConcepts; c++) {
    let lastPos = schedule.findIndex(e => e === `Concept ${c} - Teach 1`);

    for (let r = 1; r <= 5; r++) {
      let targetPos = lastPos + gaps[r - 1];

      while (schedule[targetPos] !== undefined) {
        targetPos++; // push lower priority concepts down
      }

      schedule[targetPos] = `Concept ${c} - Revision ${r}`;
      lastPos = targetPos;
    }
  }

  // Step 3: Compact to 60 spots
  const finalList = schedule
    .map((e, i) => ({ index: i, value: e }))
    .filter(item => item.value !== undefined)
    .sort((a, b) => a.index - b.index)
    .slice(0, 60) // only first 60 slots
    .map((item, i) => `${i + 1} - ${item.value}`);

  return finalList;
}

// Example:
console.log(generateSchedule(10).join("\n"));


// 1 - Concept 1 - Teach 1
// 2 - Concept 2 - Teach 1
// 3 - Concept 3 - Teach 1
// 4 - Concept 4 - Teach 1
// 5 - Concept 5 - Teach 1
// 6 - Concept 6 - Teach 1
// 7 - Concept 7 - Teach 1
// 8 - Concept 8 - Teach 1
// 9 - Concept 9 - Teach 1
// 10 - Concept 10 - Teach 1
// 11 - Concept 1 - Revision 1
// 12 - Concept 2 - Revision 1
// 13 - Concept 3 - Revision 1
// 14 - Concept 4 - Revision 1
// 15 - Concept 1 - Revision 2
// 16 - Concept 2 - Revision 2
// 17 - Concept 3 - Revision 2
// 18 - Concept 4 - Revision 2
// 19 - Concept 5 - Revision 1
// 20 - Concept 6 - Revision 1
// 21 - Concept 7 - Revision 1
// 22 - Concept 8 - Revision 1
// 23 - Concept 1 - Revision 3
// 24 - Concept 2 - Revision 3
// 25 - Concept 3 - Revision 3
// 26 - Concept 4 - Revision 3
// 27 - Concept 5 - Revision 2
// 28 - Concept 6 - Revision 2
// 29 - Concept 7 - Revision 2
// 30 - Concept 8 - Revision 2
// 31 - Concept 9 - Revision 1
// 32 - Concept 10 - Revision 1
// 33 - Concept 5 - Revision 3
// 34 - Concept 6 - Revision 3
// 35 - Concept 7 - Revision 3
// 36 - Concept 1 - Revision 4
// 37 - Concept 2 - Revision 4
// 38 - Concept 3 - Revision 4
// 39 - Concept 4 - Revision 4
// 40 - Concept 8 - Revision 3
// 41 - Concept 9 - Revision 2
// 42 - Concept 10 - Revision 2
// 43 - Concept 5 - Revision 4
// 44 - Concept 6 - Revision 4
// 45 - Concept 7 - Revision 4
// 46 - Concept 1 - Revision 5
// 47 - Concept 2 - Revision 5
// 48 - Concept 3 - Revision 5
// 49 - Concept 4 - Revision 5
// 50 - Concept 8 - Revision 4
// 51 - Concept 9 - Revision 3
// 52 - Concept 10 - Revision 3
// 53 - Concept 5 - Revision 5
// 54 - Concept 6 - Revision 5
// 55 - Concept 7 - Revision 5
// 56 - Concept 8 - Revision 5
// 57 - Concept 9 - Revision 4
// 58 - Concept 10 - Revision 4
// 59 - Concept 9 - Revision 5
// 60 - Concept 10 - Revision 5