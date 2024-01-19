document.addEventListener("DOMContentLoaded", function () {
    const dailyButton = document.getElementById("daily");
    const weeklyButton = document.getElementById("weekly");
    const monthlyButton = document.getElementById("monthly");
  
    const dailyWorkContent = document.getElementById("daily-work");
    const dailyPlayContent = document.getElementById("daily-play");
    const dailyStudyContent = document.getElementById("daily-study");
    const dailyExerciseContent = document.getElementById("daily-exercise");
    const dailySocialContent = document.getElementById("daily-social");
    const dailySelfContent = document.getElementById("daily-self");
  
    const weeklyWorkContent = document.getElementById("weekly-work");
    const weeklyPlayContent = document.getElementById("weekly-play");
    const weeklyStudyContent = document.getElementById("weekly-study");
    const weeklyExerciseContent = document.getElementById("weekly-exercise");
    const weeklySocialContent = document.getElementById("weekly-social");
    const weeklySelfContent = document.getElementById("weekly-self");
  
    const monthlyWorkContent = document.getElementById("monthly-work");
    const monthlyPlayContent = document.getElementById("monthly-play");
    const monthlyStudyContent = document.getElementById("monthly-study");
    const monthlyExerciseContent = document.getElementById("monthly-exercise");
    const monthlySocialContent = document.getElementById("monthly-social");
    const monthlySelfContent = document.getElementById("monthly-self");
  
    // Function to remove 'active' class from all buttons
    function removeActiveClassFromButtons() {
      dailyButton.classList.remove("active");
      weeklyButton.classList.remove("active");
      monthlyButton.classList.remove("active");
    }
  
    dailyButton.addEventListener("click", function () {
      removeActiveClassFromButtons(); // Remove 'active' class from all buttons
      dailyButton.classList.add("active"); // Add 'active' class to the clicked button
  
      dailyWorkContent.style.display = "block";
      dailyPlayContent.style.display = "block";
      dailyStudyContent.style.display = "block";
      dailyExerciseContent.style.display = "block";
      dailySocialContent.style.display = "block";
      dailySelfContent.style.display = "block";
  
      weeklyWorkContent.style.display = "none";
      weeklyPlayContent.style.display = "none";
      weeklyStudyContent.style.display = "none";
      weeklyExerciseContent.style.display = "none";
      weeklySocialContent.style.display = "none";
      weeklySelfContent.style.display = "none";
  
      monthlyWorkContent.style.display = "none";
      monthlyPlayContent.style.display = "none";
      monthlyStudyContent.style.display = "none";
      monthlyExerciseContent.style.display = "none";
      monthlySocialContent.style.display = "none";
      monthlySelfContent.style.display = "none";
    });
  
    weeklyButton.addEventListener("click", function () {
      removeActiveClassFromButtons(); // Remove 'active' class from all buttons
      weeklyButton.classList.add("active"); // Add 'active' class to the clicked button
  
      dailyWorkContent.style.display = "none";
      dailyPlayContent.style.display = "none";
      dailyStudyContent.style.display = "none";
      dailyExerciseContent.style.display = "none";
      dailySocialContent.style.display = "none";
      dailySelfContent.style.display = "none";
  
      weeklyWorkContent.style.display = "block";
      weeklyPlayContent.style.display = "block";
      weeklyStudyContent.style.display = "block";
      weeklyExerciseContent.style.display = "block";
      weeklySocialContent.style.display = "block";
      weeklySelfContent.style.display = "block";
  
      monthlyWorkContent.style.display = "none";
      monthlyPlayContent.style.display = "none";
      monthlyStudyContent.style.display = "none";
      monthlyExerciseContent.style.display = "none";
      monthlySocialContent.style.display = "none";
      monthlySelfContent.style.display = "none";
    });
  
    monthlyButton.addEventListener("click", function () {
      removeActiveClassFromButtons(); // Remove 'active' class from all buttons
      monthlyButton.classList.add("active"); // Add 'active' class to the clicked button
  
      dailyWorkContent.style.display = "none";
      dailyPlayContent.style.display = "none";
      dailyStudyContent.style.display = "none";
      dailyExerciseContent.style.display = "none";
      dailySocialContent.style.display = "none";
      dailySelfContent.style.display = "none";
  
      weeklyWorkContent.style.display = "none";
      weeklyPlayContent.style.display = "none";
      weeklyStudyContent.style.display = "none";
      weeklyExerciseContent.style.display = "none";
      weeklySocialContent.style.display = "none";
      weeklySelfContent.style.display = "none";
  
      monthlyWorkContent.style.display = "block";
      monthlyPlayContent.style.display = "block";
      monthlyStudyContent.style.display = "block";
      monthlyExerciseContent.style.display = "block";
      monthlySocialContent.style.display = "block";
      monthlySelfContent.style.display = "block";
    });
  });
  