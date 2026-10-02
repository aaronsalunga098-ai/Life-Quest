# 1. How We Used AI

The group used ChatGPT as an assistance tool during the development of LifeQuest. It was used for planning, HTML development, revisions, explanations, troubleshooting, and reviewing the project. The group reviewed the AI output and made changes when necessary.

### Entry 1 - LifeQuest Project Planning

**Date:** September 2026
**Tool:** ChatGPT

**What we asked:**
We asked ChatGPT to help plan the structure and features of LifeQuest, a gamified productivity and habit tracker.

**What AI gave back:**
AI suggested a website structure with pages such as Home, Quests, Habits, and Rewards. It also suggested features such as XP, levels, streaks, quests, and badges.

**What we kept/changed and why:**
We used these suggestions as a starting point for the website structure. We then adjusted the features and page organization based on the project requirements and our group's division of work.

**Commit where the related work landed:**
[Add LifeQuest HTML pages - 2357ff0](https://github.com/aaronsalunga098-ai/Life-Quest/commit/2357ff0d1c223ef4f09d2e0a60e85ae94fdafaf9)

---

### Entry 2 - Home Page Development

**Date:** September 2026
**Tool:** ChatGPT

**What we asked:**
ChatGPT was used to help improve and expand the Home page after the original `index.html` structure had already been created.

**What AI gave back:**
AI suggested adding sections for the player level, rank, XP progress, streak, priority quests, and recent achievements.

**What we kept/changed and why:**
We kept the parts that matched the LifeQuest design and changed the content and element IDs to match the JavaScript functionality. The original `index.html` structure had already been created during the initial project setup.

**Commit where the work landed:**
[Add LifeQuest HTML pages - 2357ff0](https://github.com/aaronsalunga098-ai/Life-Quest/commit/2357ff0d1c223ef4f09d2e0a60e85ae94fdafaf9)

---

### Entry 3 - Quests Page

**Date:** September 2026
**Tool:** ChatGPT

**What we asked:**
We asked ChatGPT to help organize the HTML structure for the Quests page, including adding quests, choosing categories and XP rewards, and filtering quests.

**What AI gave back:**
AI provided a form structure with a quest title, category selection, XP selection, and buttons for All, Active, and Completed quests.

**What we kept/changed and why:**
We used the structure as a starting point and reviewed the IDs, classes, labels, and navigation so they matched the functionality planned for LifeQuest.

**Commit where the work landed:**
[Add LifeQuest HTML pages - 2357ff0](https://github.com/aaronsalunga098-ai/Life-Quest/commit/2357ff0d1c223ef4f09d2e0a60e85ae94fdafaf9)

---

### Entry 4 - Habits Page

**Date:** September 2026
**Tool:** ChatGPT

**What we asked:**
We asked ChatGPT to help organize the HTML structure for the Daily Habit Matrix.

**What AI gave back:**
AI provided a structure with a form for adding habits and a container where the user's habits could be displayed.

**What we kept/changed and why:**
We kept the general structure but adjusted the labels, IDs, navigation, and wording to match LifeQuest. We also made sure the HTML elements could connect to the JavaScript functionality.

**Commit where the work landed:**
[Add LifeQuest HTML pages - 2357ff0](https://github.com/aaronsalunga098-ai/Life-Quest/commit/2357ff0d1c223ef4f09d2e0a60e85ae94fdafaf9)

---

### Entry 5 - Rewards and Badges Page

**Date:** September 2026
**Tool:** ChatGPT

**What we asked:**
We asked ChatGPT to help organize the Reward Hall and Badges page.

**What AI gave back:**
AI suggested a player statistics section with total XP, current level, completed quests, and streak. It also suggested separate sections for earned and locked badges.

**What we kept/changed and why:**
We kept the general structure because it matched the gamification concept. We reviewed the badge names, descriptions, IDs, and page structure before using them.

**Commit where the work landed:**
[Add LifeQuest HTML pages - 2357ff0](https://github.com/aaronsalunga098-ai/Life-Quest/commit/2357ff0d1c223ef4f09d2e0a60e85ae94fdafaf9)

---

### Entry 6 - Project and Security Review

**Date:** September 2026
**Tool:** ChatGPT

**What we asked:**
We asked ChatGPT to review parts of LifeQuest against the project requirements and security checklist.

**What AI gave back:**
AI reviewed the project and identified a security concern involving user-entered quest and habit names being inserted into the page using `innerHTML`.

**What we kept/changed and why:**
We kept the finding because it identified a real security concern. We documented the issue in our security review instead of assuming the existing code was automatically safe.

**Commit where the related code landed:**
[f32844e - Add files via upload](https://github.com/aaronsalunga098-ai/Life-Quest/commit/f32844e)

---

# 2. Where AI Got It Wrong

AI was not treated as automatically correct. We compared its suggestions with the professor's instructions, our actual project structure, and the Git history.

### Case 1 - Misunderstanding the Starter HTML Structure

**What AI gave:**
AI initially treated the professor's starter HTML structure as something that should also be used as the structure for the other LifeQuest pages.

**What was wrong:**
The starter structure was specifically the starting point for `index.html`. The other pages could use their own HTML structures based on the project's requirements.

**What we did instead:**
We kept the starter structure as the basis for `index.html` and created custom HTML structures for `quests.html`, `habits.html`, and `rewards.html`.

**Commit:**
[Add LifeQuest HTML pages - 2357ff0](https://github.com/aaronsalunga098-ai/Life-Quest/commit/2357ff0d1c223ef4f09d2e0a60e85ae94fdafaf9)

---

### Case 2 - Incorrect Contribution Attribution

**What AI gave:**
AI initially suggested that Aaron could include `script.js` as part of his contribution because his HTML was connected to the JavaScript.

**What was wrong:**
Using or understanding another member's JavaScript does not mean that Aaron wrote it. The group's division of work identifies JavaScript as Joshua's responsibility.

**What we did instead:**
We checked the Git history and separated the contributions based on the actual work assigned to each member. Aaron's main contribution was the HTML structure and initial project setup, while Joshua was responsible for the JavaScript functionality.

**Commit used to verify the contribution:**
[Add LifeQuest HTML pages - 2357ff0](https://github.com/aaronsalunga098-ai/Life-Quest/commit/2357ff0d1c223ef4f09d2e0a60e85ae94fdafaf9)

---

### Case 3 - Unsafe Use of User-Entered Content

**What AI gave:**
AI-assisted JavaScript used `innerHTML` to display user-entered quest and habit names.

**What was wrong:**
Putting user-entered content directly into `innerHTML` without safely handling it can create a security problem.

**What we did instead:**
We identified the issue during the security review and documented it in the security checklist. We recognized that code provided or assisted by AI still needs to be checked for security and correctness.

**Commit:**
[f32844e - Add files via upload](https://github.com/aaronsalunga098-ai/Life-Quest/commit/f32844e)

---

# 3. Who Wrote What

This section documents the main contributions of each group member. Each member will explain their own code and the AI-assisted code they understand.

## @aaronsalunga098-ai

### Initial Project Setup

**Files:** `.github/workflows/deploy-pages.yml`, `.nojekyll`, `README.md`, `index.html`, `script.js`, `style.css`

**Commit:** [Initial commit - 0f0f3c8](https://github.com/aaronsalunga098-ai/Life-Quest/commit/0f0f3c89d7f590cea2cdd25e7354e031cc792241)

I made the initial setup of the LifeQuest repository. This included creating the initial project files, README, basic HTML page, and the files needed for the website and GitHub Pages deployment.

### `index.html` - Original HTML Contribution

**Commit:** [Initial commit - 0f0f3c8](https://github.com/aaronsalunga098-ai/Life-Quest/commit/0f0f3c89d7f590cea2cdd25e7354e031cc792241)

I originally wrote the first version of `index.html` myself during the initial project setup. This gave the website its initial HTML structure before the later revisions.

I understand the basic structure of the page, including the `head`, `header`, `main`, `section`, and `footer` elements.

### `index.html` - Later LifeQuest Version

**Commit:** [Add LifeQuest HTML pages - 2357ff0](https://github.com/aaronsalunga098-ai/Life-Quest/commit/2357ff0d1c223ef4f09d2e0a60e85ae94fdafaf9)

I later expanded the Home page for the LifeQuest design. It contains the player overview, player level and rank, XP progress, streak, priority quests, and recent achievements.

I also used IDs such as `player-level`, `current-xp`, `next-level-xp`, `xp-progress`, and `streak-count` so the JavaScript can find and update specific parts of the page.

### `quests.html`

**Commit:** [Add LifeQuest HTML pages - 2357ff0](https://github.com/aaronsalunga098-ai/Life-Quest/commit/2357ff0d1c223ef4f09d2e0a60e85ae94fdafaf9)

I wrote the HTML structure for the Quests page. It contains the form for adding quests, category selection, XP selection, and filters for All, Active, and Completed quests.

### `habits.html`

**Commit:** [Add LifeQuest HTML pages - 2357ff0](https://github.com/aaronsalunga098-ai/Life-Quest/commit/2357ff0d1c223ef4f09d2e0a60e85ae94fdafaf9)

I wrote the HTML structure for the Daily Habit Matrix. It contains the form for adding habits and the container where the user's habits are displayed.

### `rewards.html`

**Commit:** [Add LifeQuest HTML pages - 2357ff0](https://github.com/aaronsalunga098-ai/Life-Quest/commit/2357ff0d1c223ef4f09d2e0a60e85ae94fdafaf9)

I wrote the HTML structure for the Reward Hall and Badges page. It contains player statistics, earned badges, and locked badges.

### AI-Assisted Code I Understand

**Files:** `index.html`, `quests.html`, `habits.html`, `rewards.html`

**Commit:** [Add LifeQuest HTML pages - 2357ff0](https://github.com/aaronsalunga098-ai/Life-Quest/commit/2357ff0d1c223ef4f09d2e0a60e85ae94fdafaf9)

One AI-assisted part of the project that I understand is how the HTML structure connects to the JavaScript.

IDs such as `current-xp`, `player-level`, and `streak-count` allow JavaScript to find specific HTML elements and update their content. The HTML provides the structure and identifiers, while JavaScript handles the functionality.

---

## @FrancisAlfonso27

### CSS and Visual Design

**File:** `styles.css`

**Commit:** [f32844e - Add files via upload](https://github.com/aaronsalunga098-ai/Life-Quest/commit/f32844e)

### My Contribution

I designed and implemented the entire visual style and layout for LifeQuest in `style.css` to give the application an immersive, gamified RPG look and feel. 

My work includes:
* **Themed Color Palette & Typography:** Configured a dark fantasy aesthetic using deep dark purple/slate backgrounds. Applied gold accents and vibrant purple gradients combined with Google Fonts (`Cinzel` for headings and `Inter` for body text).
* **Component Styling:** Designed custom components such as the sticky navigation bar, game panel cards with glowing gold top borders (`.card::before`), form inputs with focus states, and primary glowing buttons (`.btn-primary`).
* **Gamification Elements:** Styled the player overview section (including the avatar container, level/rank display, and custom XP progress bar with glowing gold gradients). Styled dynamic quest and habit list items with hover transitions and completed states, statistic boxes, and responsive badge grids with locked/grayscale and earned gold-glow effects.
* **Responsiveness:** Added media queries to ensure the navigation bar, stats grid, and card layouts adapt smoothly to mobile devices and smaller screens.

### AI-Assisted Code I Understand

**File:** `styles.css`

**Commit:** [f32844e - Add files via upload](https://github.com/aaronsalunga098-ai/Life-Quest/commit/f32844e)

I understand how the CSS rules combine to create responsive and interactive visual elements
* **Flexbox and Grid Layouts:** Using CSS Flexbox (`display: flex`) for alignment in the navigation bar and quest items, and CSS Grid (`display: grid`) for the statistics grid (`.stats-grid`) and badge layouts (`.badge-grid`).
* **Visual Transitions & Pseudo-elements:** Utilizing pseudo-elements like `::before` for the decorative gold top border on cards and CSS transitions (`transition: transform 0.15s ease`) for smooth hover animations and card lifts.

---

## @JoshuaManiego

### JavaScript Functionality

**File:** `script.js`

**Commit:** [f32844e - Add files via upload](https://github.com/aaronsalunga098-ai/Life-Quest/commit/f32844e)

### My Contribution

<!-- Joshua will write his own explanation here. -->

### AI-Assisted Code I Understand

<!-- Joshua will write his own explanation here. -->

---

## Division of Work Summary

| Member              | Main Responsibility                      | Files                                                      | Commit               |
| ------------------- | ---------------------------------------- | ---------------------------------------------------------- | -------------------- |
| @aaronsalunga098-ai | HTML structure and initial project setup | `index.html`, `quests.html`, `habits.html`, `rewards.html` | `0f0f3c8`, `2357ff0` |
| @FrancisAlfonso27   | CSS and visual design                    | `style.css`                                                | `f32844e`            |
| @JoshuaManiego      | JavaScript functionality                 | `script.js`                                                | `f32844e`            |
