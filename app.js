document.addEventListener("DOMContentLoaded", () => {
    // -----------------------------------------
    // 1. Navigation / Routing Logic (SPA)
    // -----------------------------------------
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".view-section");
  
    function navigateTo(targetId) {
      // Hide all sections and inactive nav links
      sections.forEach(sec => sec.classList.remove("active"));
      navLinks.forEach(link => link.classList.remove("active"));
      
      // Make target active
      document.getElementById(targetId).classList.add("active");
      
      // Find the corresponding nav link (if it exists) to highlight
      const activeLink = document.querySelector(`.nav-link[data-target="${targetId}"]`);
      if (activeLink) activeLink.classList.add("active");

      // Scroll to top automatically
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  
    // Attach event listeners to Navigation Links
    navLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        navigateTo(e.target.dataset.target);
      });
    });
  
    // Attach CTA button
    document.getElementById("start-btn").addEventListener("click", () => {
      navigateTo("assessment-section");
    });
  
    // -----------------------------------------
    // 2. Dynamic Assessment Rendering
    // -----------------------------------------
    const skillsContainer = document.getElementById("skills-container");
    if (skillsContainer) {
      ALL_SKILLS.forEach(skill => {
        const div = document.createElement("div");
        div.className = "skill-row";
        div.innerHTML = `
          <label for="${skill.id}">${skill.name} <span class="skill-val" id="val-${skill.id}">5</span></label>
          <input type="range" id="${skill.id}" name="${skill.id}" min="1" max="10" value="5" 
                 oninput="document.getElementById('val-${skill.id}').innerText = this.value">
        `;
        skillsContainer.appendChild(div);
      });
    }
  
    // -----------------------------------------
    // 3. Recommendation Engine Algorithm
    // -----------------------------------------
    const assessmentForm = document.getElementById("assessment-form");
    
    assessmentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const userScores = {};
      ALL_SKILLS.forEach(skill => {
        userScores[skill.id] = parseInt(document.getElementById(skill.id).value);
      });
  
      calculateRecommendations(userScores);
      navigateTo("results-section");
    });
  
    function calculateRecommendations(userScores) {
      const results = [];
  
      for (const [careerName, data] of Object.entries(CAREER_DATA)) {
        const requirements = data.requirements;
        let totalRequired = 0;
        let totalUserCap = 0;
  
        // Weighted Matching Logic 
        // Max user score for a skill cannot exceed the career's requirement to prevent skewed 100% scores
        for (const [skillId, reqLevel] of Object.entries(requirements)) {
          totalRequired += reqLevel;
          const userLvl = userScores[skillId] || 0;
          totalUserCap += Math.min(userLvl, reqLevel);
        }
  
        const matchPercentage = Math.round((totalUserCap / totalRequired) * 100);
        results.push({ name: careerName, match: matchPercentage, data: data });
      }
  
      // Sort array by highest match first
      results.sort((a, b) => b.match - a.match);
      renderResults(results);
    }
  
    // -----------------------------------------
    // 4. Render Dynamic Results
    // -----------------------------------------
    function renderResults(results) {
      const container = document.getElementById("careers-container");
      container.innerHTML = "";
  
      results.forEach(res => {
        const div = document.createElement("div");
        div.className = "career-card";
        div.innerHTML = `
          <div class="match-score">${res.match}%</div>
          <h3>${res.name}</h3>
          <p>${res.data.description}</p>
          <button class="btn btn-primary mt-4 view-roadmap-btn" data-career="${res.name}">View Roadmap</button>
        `;
        container.appendChild(div);
      });
  
      // Attach click events for dynamic 'View Roadmap' buttons
      document.querySelectorAll(".view-roadmap-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
          const careerName = e.target.dataset.career;
          renderRoadmap(careerName);
          navigateTo("roadmap-section");
        });
      });
    }
  
    // -----------------------------------------
    // 5. Render Roadmap
    // -----------------------------------------
    function renderRoadmap(careerName) {
      const roadmapContainer = document.getElementById("roadmap-container");
      const roadmapTitle = document.getElementById("roadmap-title");
      
      roadmapContainer.innerHTML = "";
      roadmapTitle.innerText = `${careerName} Learning Roadmap`;
  
      const roadmapData = CAREER_DATA[careerName].roadmap;
      roadmapData.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "roadmap-item";
        div.innerHTML = `
          <h3>Step ${index + 1}: ${item.step}</h3>
          <p>${item.desc}</p>
          <a href="${item.link}" target="_blank">View Course/Resource &rarr;</a>
        `;
        roadmapContainer.appendChild(div);
      });
    }
});
