function generateSpacedRepetitionSchedule(numConcepts = 10, totalSpots = 60) {
  const gaps = [1, 2, 3, 4, 5]; // Gaps between teach/revisions (adjusted to fit within 60 spots)
  const stages = ['Teach 1', 'Revision 1', 'Revision 2', 'Revision 3', 'Revision 4', 'Revision 5'];
  
  // Initialize tracking for each concept
  const concepts = [];
  for (let i = 1; i <= numConcepts; i++) {
    concepts.push({
      id: i,
      currentStage: 0, // 0 = Teach 1, 1 = Revision 1, etc.
      nextAvailableSpot: i, // First available spot for this concept
      completed: false
    });
  }
  
  // Generate schedule
  const schedule = new Array(totalSpots).fill(null);
  
  for (let spot = 1; spot <= totalSpots; spot++) {
    // Find all concepts that are ready for this spot
    const readyConcepts = concepts.filter(
      c => !c.completed && c.nextAvailableSpot === spot
    );
    
    if (readyConcepts.length > 0) {
      // Sort by priority (concept ID first, then stage)
      readyConcepts.sort((a, b) => {
        // Prioritize by concept ID first (lower ID = higher priority)
        if (a.id !== b.id) {
          return a.id - b.id;
        }
        // If same concept, prioritize by stage (Teach before revisions)
        return a.currentStage - b.currentStage;
      });
      
      // Assign the highest priority concept
      const selectedConcept = readyConcepts[0];
      schedule[spot - 1] = {
        spot: spot,
        concept: selectedConcept.id,
        stage: stages[selectedConcept.currentStage]
      };
      
      // Update the concept's next spot
      if (selectedConcept.currentStage < stages.length - 1) {
        const gapIndex = selectedConcept.currentStage;
        selectedConcept.nextAvailableSpot = spot + gaps[gapIndex] + 1;
        selectedConcept.currentStage++;
      } else {
        selectedConcept.completed = true;
      }
      
      // Push other ready concepts to next available spot
      for (let i = 1; i < readyConcepts.length; i++) {
        readyConcepts[i].nextAvailableSpot = spot + 1;
      }
    }
  }
  
  return schedule;
}

// Alternative: Return as formatted string
function getScheduleAsString(numConcepts = 10, totalSpots = 60) {
  const schedule = generateSpacedRepetitionSchedule(numConcepts, totalSpots);
  return schedule
    .map(item => item ? `${item.spot} - Concept ${item.concept} - ${item.stage}` : '')
    .filter(line => line !== '')
    .join('\n');
}

// Usage:
console.log(getScheduleAsString(10, 60));