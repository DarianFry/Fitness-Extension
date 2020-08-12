var exerciseList = [
    {exerciseName:"Inverted Row", reps: "10-12", equipment: "2 chairs/hightable", bodyPart: "back", image:"<img src='./exerciseImages/inverted-row.jpg'>"},
    {exerciseName:"Pull-ups", reps: "5-6", equipment: "pull-up bar/doorway", bodyPart: "back", image:"<img src='./exerciseImages/pullup.jpg'>"},
    {exerciseName:"Bent Over Row", reps: "8-10", equipment: "dumbbells/bands/heavy object", bodyPart: "back", image:"<img src='./exerciseImages/bent-over-row.jpg'>"},
    {exerciseName:"Single Arm Row", reps: "8-10", equipment: "dumbbell/bands/heavy object", bodyPart: "back", image:"<img src='./exerciseImages/single-arm-row.jpg'>"},
    {exerciseName:"Reverse Grip Row", reps: "8-10", equipment: "dumbbells/bands/heavy object", bodyPart: "back", image:"<img src='./exerciseImages/reverse-grip-row.jpg'>"},
    {exerciseName:"Push-ups", reps: "8-10", equipment: "none", bodyPart: "chest", image:"<img src='./exerciseImages/push-ups-demo.jpg'>"},
    {exerciseName:"Decline Push-ups", reps: "8-10", equipment: "wall/stool/chair", bodyPart: "chest", image:"<img src='./exerciseImages/incline-push-ups.jpg'>"},
    {exerciseName:"Side-to-Side Push-ups", reps: "8-10", equipment: "none", bodyPart: "chest", image:"<img src='./exerciseImages/archer1.jpg'>"},
    {exerciseName:"Chest Press", reps: "6-8", equipment: "dumbbells/bands/heavy object", bodyPart: "chest", image:"<img src='./exerciseImages/Dumbbell-Floor-Press.jpg'>"},
    {exerciseName:"Handstand Push-ups", reps: "5-6", equipment: "wall/none", bodyPart: "shoulders", image:"<img src='./exerciseImages/handstand-pushup.jpg'>"},
    {exerciseName:"Lateral Raise", reps: "20-30", equipment: "dumbbells/bands/heavy objects", bodyPart: "shoulders", image:"<img src='./exerciseImages/Lateral-Raise.jpg'>"},
    {exerciseName:"Reverse Flys", reps: "15-20", equipment: "dumbbells/bands/heavy objects", bodyPart: "shoulders", image:"<img src='./exerciseImages/reverse-fly.jpg'>"},
    {exerciseName:"Overehead Tricep Extensions", reps: "10-12 per arm", equipment: "dumbbells/bands/heavy objects", bodyPart: "arms", image:"<img src='./exerciseImages/overhead-tricep-extension.png'>"},
    {exerciseName:"Bicep Curls", reps: "8-10", equipment: "dumbbells/bands/heavy objects", bodyPart: "arms", image:"<img src='./exerciseImages/BicepCurl.jpg'>"},
    {exerciseName:"Hammer Curls", reps: "8-10", equipment: "dumbbells/bands/heavy objects", bodyPart: "arms", image:"<img src='./exerciseImages/dumbbell-hammer-curl.jpg'>"},
    {exerciseName:"Squat", reps: "8-10", equipment: "none/dumbbell/heavy object", bodyPart: "legs", image:"<img src='./exerciseImages/squat.png'>"},
    {exerciseName:"Hip Thrusts", reps: "10-12", equipment: "none/dumbbell/heavy object", bodyPart: "legs", image:"<img src='./exerciseImages/hipthrust.png'>"},
    {exerciseName:"Romanian Deadlift", reps: "8-10", equipment: "dumbbells/bands/heavy object", bodyPart: "legs", image:"<img src='./exerciseImages/dumbbell_romanian_deadlift.jpg'>"},
    {exerciseName:"Walking Lunges", reps: "8-10 per leg", equipment: "none/dumbbells/heavy objects", bodyPart: "legs", image:"<img src='./exerciseImages/walking-lunge.jpg'>"},
    {exerciseName:"Hanging Leg Raise", reps: "8-10", equipment: "pull-up bar/doorway", bodyPart: "abs", image:"<img src='./exerciseImages/hanging_leg_raise.jpg'>"},
    {exerciseName:"Sit Ups",reps: "10-15", equipment: "none", bodyPart: "abs", image:"<img src='./exerciseImages/Sit-Ups.jpg'>"},
    {exerciseName: "Bicycle Crunches", reps: "15-20", equipment: "none", bodyPart: "abs", image:"<img src='./exerciseImages/bicycle-crunch.jpg'>"},
    {exerciseName: "Russian Twists", reps: "15-20", equipment: "none", bodyPart: "abs", image:"<img src='./exerciseImages/russian-twist.jpg'>"},
    {exerciseName: "Ab Roll Outs", reps: "6-8", equipment: "ab wheel/towel and tile floor", bodyPart: "abs", image:"<img src='./exerciseImages/Ab-Wheel-Rollout.jpg'>"},
    {exerciseName: "Planck", reps: "30-60 seconds", equipment: "none", bodyPart: "abs", image:"<img src='./exerciseImages/planck.png'>"},
    {exerciseName: "Cat-Cow", reps: "8-10", equipment: "none", bodyPart: "back mobility", image:"<img src='./exerciseImages/cat-and-cow.jpg'>"},
    {exerciseName: "Pec Stretch Against Wall", reps: "20-30 seconds", equipment: "wall edge", bodyPart: "chest mobility", image:"<img src='./exerciseImages/pec-stretch.jpg'>"},
    {exerciseName: "Tricep Stretch", reps: "20-30 seconds per arm", equipment: "none", bodyPart: "arm mobility", image:"<img src='./exerciseImages/tricep-stretch.jpg'>"},
    {exerciseName: "Bicep Stretch Against Wall", reps: "20-30 seconds per arm", equipment: "wall", bodyPart: "arm mobility", image:"<img src='./exerciseImages/Bicep-stretch.jpg'>"},
    {exerciseName: "Quad Stretch", reps: "20-30 seconds per leg", equipment: "none", bodyPart: "leg mobility", image:"<img src='./exerciseImages/quad-stretch.jpg'>"},
    {exerciseName: "Hamstring Stretch", reps: "20-30 seconds per leg", equipment: "none", bodyPart: "leg mobility", image:"<img src='./exerciseImages/hamstring-stretch.jpg'>"},
    {exerciseName: "Pigeon Stretch", reps: "20-30 seconds per leg", equipment: "none", bodyPart: "leg mobility", image:"<img src='./exerciseImages/pigeon-stretch.png'>"},
    {exerciseName: "Downward Dog", reps: "30-40 seconds ", equipment: "none", bodyPart: "leg mobility", image:"<img src='./exerciseImages/downward-dog.jpg'>"},
    {exerciseName: "Shoulder Stretch", reps: "20-30 seconds per arm", equipment: "none", bodyPart: "shoulder mobility", image:"<img src='./exerciseImages/shoulder-stretch.jpg'>"},
    {exerciseName: "Hip Circles", reps: "10 rotations each direction", equipment: "none", bodyPart: "leg mobility", image:"<img src='./exerciseImages/hipcircles.png'>"},
    {exerciseName: "Head Circles", reps: "5-8 each direction", equipment: "none", bodyPart: "back/neck mobility", image:"<img src='./exerciseImages/headcircles.png'>"}
   ];

     

function getRandom(arr, n) {
  var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
  if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

var selectedExercises = getRandom(exerciseList, 4);

var tableData = '<table><thead class="thead-dark"><tr><th>Exercise</th><th>Image Demo</th><th>Reps</th><th>Equipment Needed</th><th>Body Part Worked</th></tr></thead>';
$.each(selectedExercises, function(index, data) {
 tableData += '<tr><td>'+data.exerciseName+'</td><td>'+data.image+'</td><td>'+data.reps+'</td><td>'+data.equipment+'</td><td>'+data.bodyPart+'</td></tr>';
});

$('table').html(tableData);


