const form = document.getElementById('goal-form');
    const bodyfatSelect = document.getElementById('bodyfat');
    const startWeightInput = document.getElementById('start-weight');
    const heightInput = document.getElementById('height');
    const genderSelect = document.getElementById('gender');
    const goalWeightInput = document.getElementById('goal-weight');
    const ageInput = document.getElementById('age');
    const submitBtn = document.getElementById('submit-btn');
    const goalGuidelines = document.getElementById('goal-guidelines');
    const goalSummary = document.getElementById('goal-summary');
    const startDatePara = document.getElementById('start-date');
    const goalDatePara = document.getElementById('goal-date');
    const daysToGoPara = document.getElementById('days-to-go');
    const totalWeightLostPara = document.getElementById('total-weight-lost');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const bodyfat = bodyfatSelect.value;
        const startWeight = parseFloat(startWeightInput.value);
        const height = parseFloat(heightInput.value);
        const gender = genderSelect.value;
        const goalWeight = parseFloat(goalWeightInput.value);
        const age = parseInt(ageInput.value);
        const startDate = new Date();
        const goalDate = new Date(startDate.getTime() + 30 * 24 * 60 * 60 * 1000); // 30 days from now
        const daysToGo = Math.round((goalDate.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000));
        const totalWeightLost = startWeight - goalWeight;

        startDatePara.textContent = `Start Date: ${startDate.toLocaleDateString()}`;
        goalDatePara.textContent = `Goal Date: ${goalDate.toLocaleDateString()}`;
        daysToGoPara.textContent = `Days to Go: ${daysToGo}`;
        totalWeightLostPara.textContent = `Total Weight Lost: ${totalWeightLost} kg`;

        goalSummary.style.display = 'block';
    });
