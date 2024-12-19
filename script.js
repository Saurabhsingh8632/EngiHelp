// Carousel Logic
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel img");
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function startCarousel() {
  showSlide(currentSlide);
  setInterval(nextSlide, 3000);
}

startCarousel();

// CGPA Calculator
function createSubjectInputs() {
  const theoryCount = parseInt(document.getElementById("theory-count").value);
  const practicalCount = parseInt(document.getElementById("practical-count").value);
  const subjectsContainer = document.getElementById("subjects-container");

  if (theoryCount > 0 || practicalCount > 0) {
    document.getElementById("initial-form").style.display = "none";
    document.getElementById("subject-form").style.display = "block";
    subjectsContainer.innerHTML = "";

    for (let i = 1; i <= theoryCount; i++) {
      subjectsContainer.innerHTML += `
        <div class="form-group">
          <label>Theory Subject ${i} (Grade and Credit):</label>
          <input type="number" class="grade" placeholder="Grade (e.g., 9)" required />
          <input type="number" class="credit" placeholder="Credit (e.g., 3)" required />
        </div>
      `;
    }

    for (let i = 1; i <= practicalCount; i++) {
      subjectsContainer.innerHTML += `
        <div class="form-group">
          <label>Practical Subject ${i} (Grade and Credit):</label>
          <input type="number" class="grade" placeholder="Grade (e.g., 9)" required />
          <input type="number" class="credit" placeholder="Credit (e.g., 2)" required />
        </div>
      `;
    }
  } else {
    alert("Please enter a valid number of subjects.");
  }
}

function calculateCGPA() {
  const grades = document.querySelectorAll(".grade");
  const credits = document.querySelectorAll(".credit");
  let totalCredits = 0;
  let weightedGradeSum = 0;

  grades.forEach((grade, i) => {
    const gradeValue = parseFloat(grade.value);
    const creditValue = parseFloat(credits[i].value);
    totalCredits += creditValue;
    weightedGradeSum += gradeValue * creditValue;
  });

  if (totalCredits > 0) {
    const cgpa = (weightedGradeSum / totalCredits).toFixed(2);
    document.getElementById("result").textContent = `Your CGPA is: ${cgpa}`;
  } else {
    alert("Please enter valid grades and credits.");
  }
}






