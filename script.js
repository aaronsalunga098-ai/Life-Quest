const state = JSON.parse(localStorage.getItem('lifeQuestState')) || {
    xp: 0,
    level: 0,
    streak: 0,
    lastActiveDate: new Date().toDateString(),
    quests: [],
    habits: [],
    badges: [],
    achievements: []
};

const ranks = [
    "Novice", "Apprentice", "Journeyman", "Adventurer", 
    "Expert", "Master", "Grandmaster", "Champion", 
    "Hero", "Legend", "Mythic"
];

function saveState() {
    localStorage.setItem('lifeQuestState', JSON.stringify(state));
}

function checkDailyStreak() {
    const today = new Date().toDateString();
    if (state.lastActiveDate !== today) {
        const lastDate = new Date(state.lastActiveDate);
        const currentDate = new Date(today);
        const diffTime = Math.abs(currentDate - lastDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
            state.streak += 1;
        } else if (diffDays > 1) {
            state.streak = 0;
        }
        state.lastActiveDate = today;
        saveState();
    }
}

function calculateLevel() {
    const newLevel = Math.floor(state.xp / 100);
    if (newLevel > state.level) {
        state.level = newLevel;
        unlockBadgeCheck();
    }
}

function addXP(amount) {
    state.xp += amount;
    calculateLevel();
    saveState();
    updateUI();
}

function unlockBadge(badgeName, description) {
    if (!state.badges.includes(badgeName)) {
        state.badges.push(badgeName);
        state.achievements.unshift({ 
            name: badgeName, 
            desc: description, 
            date: new Date().toLocaleDateString() 
        });
        if (state.achievements.length > 5) state.achievements.pop();
        saveState();
    }
}

function unlockBadgeCheck() {
    const completedQuests = state.quests.filter(q => q.status === 'completed').length;
    const maxHabitStreak = state.habits.reduce((max, h) => Math.max(max, h.streak), 0);

    if (completedQuests >= 1) unlockBadge('Early Bird', 'Complete your first quest.');
    if (completedQuests >= 10) unlockBadge('Quest Hunter', 'Complete 10 quests.');
    if (completedQuests >= 25) unlockBadge('Master Adventurer', 'Complete 25 quests.');
    if (state.streak >= 7) unlockBadge('7-Day Streak', 'Maintain a 7-day streak.');
    if (maxHabitStreak >= 30) unlockBadge('Habit Master', 'Maintain a 30-day habit streak.');
    if (state.level >= 10) unlockBadge('Level 10 Hero', 'Reach Level 10.');
}

function updateUI() {
    const rankIndex = Math.min(state.level, ranks.length - 1);
    const rankName = ranks[rankIndex];
    const nextXp = (state.level + 1) * 100;
    const currentLevelXp = state.xp % 100;
    const progressPercent = (currentLevelXp / 100) * 100;

    const elPlayerLevel = document.getElementById('player-level');
    const elPlayerRank = document.getElementById('player-rank');
    const elCurrentXp = document.getElementById('current-xp');
    const elNextLevelXp = document.getElementById('next-level-xp');
    const elXpProgress = document.getElementById('xp-progress');
    const elStreakCount = document.getElementById('streak-count');

    if (elPlayerLevel) elPlayerLevel.textContent = `Level ${state.level}`;
    if (elPlayerRank) elPlayerRank.textContent = rankName;
    if (elCurrentXp) elCurrentXp.textContent = state.xp;
    if (elNextLevelXp) elNextLevelXp.textContent = nextXp;
    if (elXpProgress) elXpProgress.style.width = `${progressPercent}%`;
    if (elStreakCount) elStreakCount.textContent = state.streak;

    renderHomeQuests();
    renderAchievements();
    renderQuestsPage(window.currentQuestFilter || 'all');
    renderHabitsPage();
    renderRewardsPage();
}

function renderHomeQuests() {
    const container = document.getElementById('home-quests');
    if (!container) return;

    const activeQuests = state.quests.filter(q => q.status === 'active').slice(0, 3);
    if (activeQuests.length === 0) {
        container.innerHTML = '<p id="no-home-quests">No active quests yet. Start your first quest!</p>';
        return;
    }

    container.innerHTML = '';
    activeQuests.forEach(quest => {
        const div = document.createElement('div');
        div.className = 'quest-item';
        div.innerHTML = `
            <div>
                <span class="tag">${quest.category}</span>
                <strong>${quest.title}</strong>
            </div>
            <div>
                <span class="xp-badge">+${quest.xp} XP</span>
                <button class="btn-primary" style="padding: 6px 12px; margin-left: 10px;" onclick="window.completeQuest('${quest.id}')">Complete</button>
            </div>
        `;
        container.appendChild(div);
    });
}

function renderAchievements() {
    const container = document.getElementById('recent-achievements');
    if (!container) return;

    if (state.achievements.length === 0) {
        container.innerHTML = '<p id="no-achievements">Complete quests and habits to unlock achievements!</p>';
        return;
    }

    container.innerHTML = '';
    state.achievements.forEach(ach => {
        const div = document.createElement('div');
        div.className = 'quest-item completed';
        div.innerHTML = `
            <div>
                <span class="tag">Achievement</span>
                <strong>${ach.name}</strong>
                <p style="font-size: 0.8rem; color: #a79fca; margin: 0;">${ach.desc}</p>
            </div>
            <div style="font-size: 0.8rem; color: #a79fca;">${ach.date}</div>
        `;
        container.appendChild(div);
    });
}

function generateId() {
    return Math.random().toString(36).substr(2, 9);
}

const questForm = document.getElementById('quest-form');
if (questForm) {
    questForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('quest-title').value;
        const category = document.getElementById('quest-category').value;
        const xp = parseInt(document.getElementById('quest-xp').value);

        state.quests.unshift({
            id: generateId(),
            title,
            category,
            xp,
            status: 'active',
            created: new Date().toISOString()
        });

        saveState();
        questForm.reset();
        updateUI();
    });
}

function renderQuestsPage(filterType = 'all') {
    const container = document.getElementById('quest-list');
    if (!container) return;

    window.currentQuestFilter = filterType;
    let filtered = state.quests;
    if (filterType === 'active') filtered = state.quests.filter(q => q.status === 'active');
    if (filterType === 'completed') filtered = state.quests.filter(q => q.status === 'completed');

    if (filtered.length === 0) {
        container.innerHTML = '<p id="no-quests">No quests found.</p>';
        return;
    }

    container.innerHTML = '';
    filtered.forEach(quest => {
        const isCompleted = quest.status === 'completed';
        const div = document.createElement('div');
        div.className = `quest-item ${isCompleted ? 'completed' : ''}`;
        div.innerHTML = `
            <div>
                <span class="tag">${quest.category}</span>
                <strong style="${isCompleted ? 'text-decoration: line-through;' : ''}">${quest.title}</strong>
            </div>
            <div>
                <span class="xp-badge">+${quest.xp} XP</span>
                ${!isCompleted ? `<button class="btn-primary" style="padding: 6px 12px; margin-left: 10px;" onclick="window.completeQuest('${quest.id}')">Complete</button>` : '<span style="margin-left:10px; color:#4ade80; font-weight:bold;">Done ✓</span>'}
                <button style="background:transparent; border:none; color:#ef4444; margin-left:10px; cursor:pointer; font-size:1.1rem;" onclick="window.deleteQuest('${quest.id}')">✕</button>
            </div>
        `;
        container.appendChild(div);
    });
}

const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        filterBtns.forEach(b => b.classList.remove('active-filter'));
        e.target.classList.add('active-filter');
        renderQuestsPage(e.target.getAttribute('data-filter'));
    });
});

window.completeQuest = function(id) {
    const quest = state.quests.find(q => q.id === id);
    if (quest && quest.status === 'active') {
        quest.status = 'completed';
        addXP(quest.xp);
        unlockBadgeCheck();
        saveState();
        updateUI();
    }
};

window.deleteQuest = function(id) {
    state.quests = state.quests.filter(q => q.id !== id);
    unlockBadgeCheck();
    saveState();
    updateUI();
};

const habitForm = document.getElementById('habit-form');
if (habitForm) {
    habitForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('habit-name').value;
        state.habits.unshift({
            id: generateId(),
            title,
            streak: 0,
            lastCompleted: null
        });
        saveState();
        habitForm.reset();
        updateUI();
    });
}

function renderHabitsPage() {
    const container = document.getElementById('habit-list');
    if (!container) return;

    if (state.habits.length === 0) {
        container.innerHTML = '<p id="no-habits">No habits yet. Add your first daily habit!</p>';
        return;
    }

    const today = new Date().toDateString();
    container.innerHTML = '';

    state.habits.forEach(habit => {
        const isCompletedToday = habit.lastCompleted === today;
        const div = document.createElement('div');
        div.className = `habit-item ${isCompletedToday ? 'completed' : ''}`;
        div.innerHTML = `
            <div>
                <span class="tag">Habit</span>
                <strong>${habit.title}</strong>
                <div style="font-size: 0.8rem; color: #a79fca; margin-top: 4px; font-weight:600;">🔥 Streak: ${habit.streak} days</div>
            </div>
            <div>
                ${!isCompletedToday ? `<button class="btn-primary" style="padding: 6px 12px;" onclick="window.completeHabit('${habit.id}')">Do It (+10 XP)</button>` : '<span style="color:#4ade80; font-weight:bold;">Done Today ✓</span>'}
                <button style="background:transparent; border:none; color:#ef4444; margin-left:10px; cursor:pointer; font-size:1.1rem;" onclick="window.deleteHabit('${habit.id}')">✕</button>
            </div>
        `;
        container.appendChild(div);
    });
}

window.completeHabit = function(id) {
    const habit = state.habits.find(h => h.id === id);
    const today = new Date().toDateString();

    if (habit && habit.lastCompleted !== today) {
        if (habit.lastCompleted) {
            const lastDate = new Date(habit.lastCompleted);
            const currentDate = new Date(today);
            const diffDays = Math.ceil(Math.abs(currentDate - lastDate) / (1000 * 60 * 60 * 24));
            
            if (diffDays === 1) {
                habit.streak += 1;
            } else {
                habit.streak = 1;
            }
        } else {
            habit.streak = 1;
        }
        
        habit.lastCompleted = today;
        addXP(10);
        unlockBadgeCheck();
        saveState();
        updateUI();
    }
};

window.deleteHabit = function(id) {
    state.habits = state.habits.filter(h => h.id !== id);
    saveState();
    updateUI();
};

function renderRewardsPage() {
    const elTotalXp = document.getElementById('total-xp');
    if (!elTotalXp) return;

    document.getElementById('total-xp').textContent = state.xp;
    document.getElementById('reward-level').textContent = `Level ${state.level}`;
    document.getElementById('completed-quests').textContent = state.quests.filter(q => q.status === 'completed').length;
    document.getElementById('reward-streak').textContent = state.streak;

    const earnedContainer = document.getElementById('earned-badges');
    const lockedContainer = document.getElementById('locked-badges');

    const allBadges = [
        { name: 'Early Bird', desc: 'Complete your first quest.', icon: '🌅' },
        { name: 'Quest Hunter', desc: 'Complete 10 quests.', icon: '🏹' },
        { name: '7-Day Streak', desc: 'Maintain a 7-day streak.', icon: '🔥' },
        { name: 'Master Adventurer', desc: 'Complete 25 quests.', icon: '👑' },
        { name: 'Habit Master', desc: 'Maintain a 30-day habit streak.', icon: '⭐' },
        { name: 'Level 10 Hero', desc: 'Reach Level 10.', icon: '⚔️' }
    ];

    earnedContainer.innerHTML = '';
    lockedContainer.innerHTML = '';

    let earnedCount = 0;
    let lockedCount = 0;

    allBadges.forEach(b => {
        const hasBadge = state.badges.includes(b.name);
        const div = document.createElement('div');
        div.className = 'card badge-card';
        div.innerHTML = `
            <div class="badge-icon">${hasBadge ? b.icon : '🔒'}</div>
            <h3>${b.name}</h3>
            <p>${b.desc}</p>
        `;

        if (hasBadge) {
            earnedContainer.appendChild(div);
            earnedCount++;
        } else {
            lockedContainer.appendChild(div);
            lockedCount++;
        }
    });

    if (earnedCount === 0) {
        earnedContainer.innerHTML = '<p id="no-earned-badges">No badges earned yet. Keep completing quests!</p>';
    }
    if (lockedCount === 0) {
        lockedContainer.innerHTML = '<p style="color: #a79fca; grid-column: 1 / -1; text-align: center;">You have unlocked every badge!</p>';
    }
}

checkDailyStreak();
unlockBadgeCheck();
updateUI();