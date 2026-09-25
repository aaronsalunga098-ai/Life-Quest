# 1. How We Used AI

AI was used by the group as an assistance tool during the development of LifeQuest. We used it for planning, HTML development, revisions, explanations, troubleshooting, and reviewing the project. The group members reviewed the AI output before using it in the project.

### Entry 1 - Project Planning

**Date:** September 2026
**Tool:** ChatGPT

**What we asked:**
We asked ChatGPT to help plan the structure and features of LifeQuest, our gamified productivity and habit tracker.

**What AI gave back:**
AI suggested the main pages of the website, including Home, Quests, Habits, and Rewards, along with possible features such as XP, levels, streaks, quests, and badges.

**What we kept/changed and why:**
We kept the general page structure because it matched our project idea. We adjusted the features and content based on our actual project requirements and group division of work.

**Commit where the work landed:**
[Add LifeQuest HTML pages - 2357ff0](https://github.com/aaronsalunga098-ai/Life-Quest/commit/2357ff0d1c223ef4f09d2e0a60e85ae94fdafaf9)

---

### Entry 2 - Home Page HTML

**Date:** September 2026
**Tool:** ChatGPT

**What we asked:**
We asked ChatGPT to help create the HTML structure for the LifeQuest Home page, including the player level, XP, streak, priority quests, and achievements.

**What AI gave back:**
AI provided an HTML structure for the player overview, XP progress, streak, priority quests, and recent achievements.

**What we kept/changed and why:**
We used the structure as a starting point and adjusted it to match the LifeQuest design and the JavaScript functionality. We also set the starting player values to Level 0, 0 XP, and a 0-day streak.

**Commit where the work landed:**
[Add LifeQuest HTML pages - 2357ff0](https://github.com/aaronsalunga098-ai/Life-Quest/commit/2357ff0d1c223ef4f09d2e0a60e85ae94fdafaf9)

---

### Entry 3 - Quests Page

**Date:** September 2026
**Tool:** ChatGPT

**What we asked:**
We asked ChatGPT to help create the HTML structure for the Quests page, including the quest form, categories, XP rewards, and quest filters.

**What AI gave back:**
AI provided the structure for adding quests, selecting categories and XP rewards, and filtering quests by All, Active, and Completed.

**What we kept/changed and why:**
We kept the structure because it matched the planned quest system. We reviewed the IDs, classes, labels, and navigation before using the code.

**Commit where the work landed:**
[Add LifeQuest HTML pages - 2357ff0](https://github.com/aaronsalunga098-ai/Life-Quest/commit/2357ff0d1c223ef4f09d2e0a60e85ae94fdafaf9)

---

### Entry 4 - Habits Page

**Date:** September 2026
**Tool:** ChatGPT

**What we asked:**
We asked ChatGPT to help create the HTML structure for the Daily Habit Matrix.

**What AI gave back:**
AI provided a habit form and a container for displaying the user's habits.

**What we kept/changed and why:**
We kept the general structure but reviewed the labels, IDs, navigation, and wording so they matched LifeQuest. The HTML was also prepared so the JavaScript could interact with the habit elements.

**Commit where the work landed:**
[Add LifeQuest HTML pages - 2357ff0](https://github.com/aaronsalunga098-ai/Life-Quest/commit/2357ff0d1c223ef4f09d2e0a60e85ae94fdafaf9)

---

### Entry 5 - Rewards and Badges Page

**Date:** September 2026
**Tool:** ChatGPT

**What we asked:**
We asked ChatGPT to help create the Reward Hall and Badges page.

**What AI gave back:**
AI suggested a player statistics section for total XP, level, completed quests, and streak, along with earned and locked badge sections.

**What we kept/changed and why:**
We kept the overall structure because it fit the gamification concept. We reviewed the badge names, descriptions, IDs, and layout before using them.

**Commit where the work landed:**
[Add LifeQuest HTML pages - 2357ff0](https://github.com/aaronsalunga098-ai/Life-Quest/commit/2357ff0d1c223ef4f09d2e0a60e85ae94fdafaf9)

---

### Entry 6 - Project and Security Review

**Date:** September 2026
**Tool:** ChatGPT

**What we asked:**
We asked ChatGPT to review the LifeQuest project against our professor's requirements and security checklist.

**What AI gave back:**
AI reviewed the HTML, JavaScript interaction, project structure, and security checklist. One important finding was that user-entered quest and habit names were being inserted using `innerHTML` without first being safely handled.

**What we kept/changed and why:**
We kept the security finding because it identified a real issue that needed attention. We used the review to understand the risk and check the project against the security requirements instead of assuming that generated code was automatically safe.

**Commit where the related code landed:**
[f32844e - Add files via upload](https://github.com/aaronsalunga098-ai/Life-Quest/commit/f32844e)

---

# 2. Where AI Got It Wrong

AI assistance was reviewed by the group rather than being accepted automatically. The following are examples where the AI output needed to be corrected or questioned.

### Case 1 - Misunderstanding the Professor's Starter HTML

**What AI gave:**
AI initially treated the professor's starter HTML structure as something that should also be used for the other LifeQuest pages.

**What was wrong:**
The starter structure was intended for the initial `index.html`. The other pages needed their own structures based on the project's requirements.

**What we did instead:**
We clarified the requirement and used the starter structure as the basis for `index.html`, while creating custom structures for `quests.html`, `habits.html`, and `rewards.html`.

**Commit:**
[Add LifeQuest HTML pages - 2357ff0](https://github.com/aaronsalunga098-ai/Life-Quest/commit/2357ff0d1c223ef4f09d2e0a60e85ae94fdafaf9)

---

### Case 2 - Incorrect Attribution of Code

**What AI gave:**
AI initially suggested that `script.js` could be listed as part of Aaron's contribution because Aaron understood how the JavaScript interacted with his HTML.

**What was wrong:**
Understanding how another member's code works does not mean that Aaron wrote that code. The Git history shows that Aaron's `2357ff0` commit contains the four HTML pages, while the later JavaScript work was committed by another group member.

**What we did instead:**
We checked the actual Git history and separated each member's contributions. Aaron's Section 3 only claims the files and commits that he actually contributed.

**Commit used to verify the contribution:**
[Add LifeQuest HTML pages - 2357ff0](https://github.com/aaronsalunga098-ai/Life-Quest/commit/2357ff0d1c223ef4f09d2e0a60e85ae94fdafaf9)

---

### Case 3 - Security Problem in AI-Assisted Code

**What AI gave:**
AI-assisted JavaScript used `innerHTML` to display user-entered quest and habit names.

**What was wrong:**
Using `innerHTML` with untrusted user-entered content can create a security risk because the content is treated as HTML rather than plain text.

**What we did instead:**
We identified the issue during the security review and documented it in the security checklist. The issue showed us that AI-generated code still needs to be reviewed for security and correctness before being used.

**Related commit:**
[f32844e - Add files via upload](https://github.com/aaronsalunga098-ai/Life-Quest/commit/f32844e)
