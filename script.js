document.addEventListener("DOMContentLoaded", loadHabits);

function addHabit() {
    let name = document.getElementById("habit-name").value;
    let goal = parseInt(document.getElementById("streak-goal").value);
    let reward = document.getElementById("reward").value;

    if (!name || !goal || !reward) {
        alert("Please fill all fields.");
        return;
    }

    let habits = JSON.parse(localStorage.getItem("habits")) || [];
    
    habits.push({ name, goal, reward, streak: 0 });
    localStorage.setItem("habits", JSON.stringify(habits));

    document.getElementById("habit-name").value = "";
    document.getElementById("streak-goal").value = "";
    document.getElementById("reward").value = "";

    loadHabits();
}

function loadHabits() {
    let habits = JSON.parse(localStorage.getItem("habits")) || [];
    let habitList = document.getElementById("habit-list");

    habitList.innerHTML = "";

    habits.forEach((habit, index) => {
        let habitDiv = document.createElement("div");
        habitDiv.classList.add("habit");

        habitDiv.innerHTML = `
            <span>${habit.name} - Streak: ${habit.streak}/${habit.goal} - Reward: ${habit.reward}</span>
            <button class="complete-btn" onclick="increaseStreak(${index})">✔</button>
            <button class="delete-btn" onclick="deleteHabit(${index})">✖</button>
        `;

        habitList.appendChild(habitDiv);
    });
}

function increaseStreak(index) {
    let habits = JSON.parse(localStorage.getItem("habits")) || [];
    
    if (habits[index].streak + 1 === habits[index].goal) {
        alert(`Congratulations! You earned your reward: ${habits[index].reward}`);
    }

    habits[index].streak += 1;
    localStorage.setItem("habits", JSON.stringify(habits));
    loadHabits();
}

function deleteHabit(index) {
    let habits = JSON.parse(localStorage.getItem("habits")) || [];
    habits.splice(index, 1);
    localStorage.setItem("habits", JSON.stringify(habits));
    loadHabits();
}

function resetAll() {
    if (confirm("Are you sure you want to reset all habits?")) {
        localStorage.removeItem("habits");
        loadHabits();
    }
}
