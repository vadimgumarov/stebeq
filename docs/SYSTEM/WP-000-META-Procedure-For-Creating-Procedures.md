# WP-000: Procedure for Creating Procedures

**Category:** Meta / Operations  
**Owner:** [Your Name]  
**Version:** 1.0  
**Created:** [Date]  
**Last Updated:** [Date]  
**Estimated Time:** 20-45 minutes per procedure

---

## Purpose

> Systematically capture and document any recurring task into a reusable, delegatable procedure. This is the master template that ensures consistency across all procedure documentation.

---

## When to Use

- [ ] You've done the same task 3+ times
- [ ] You're about to delegate a task to someone else
- [ ] You just solved a problem and want to prevent recurrence
- [ ] You notice yourself thinking "I should remember how I did this"
- [ ] A task takes longer than it should due to figuring it out each time

---

## The 80/20 Rule for Procedures

**Document the 20% of tasks that consume 80% of time or cause 80% of problems.**

Priority order for what to document first:
1. Tasks you do daily
2. Tasks that cause errors when done wrong
3. Tasks you'll eventually delegate
4. Tasks with multiple steps you sometimes forget
5. Tasks done infrequently but critical when needed

---

## Procedure Steps

### Phase 1: Capture (Do this WHILE performing the task)

| Step | Action | Details | Checkpoint |
|------|--------|---------|------------|
| 1.1 | Open capture tool | Voice memo, notes app, or scratch document | Tool ready to record |
| 1.2 | State the task name | "I am now doing [task name]" | Task clearly identified |
| 1.3 | Narrate as you work | Speak or type each action as you perform it: "First I open X, then I click Y" | Real-time capture happening |
| 1.4 | Note decision points | When you make a choice, say: "Here I decided X because Y" | Decisions documented |
| 1.5 | Record problems | If something goes wrong, document the problem and fix | Troubleshooting captured |
| 1.6 | Mark completion | "Task complete. The outcome is [result]" | End state defined |

**Critical:** Capture during the task, not after. Memory fades details immediately.

---

### Phase 2: Structure (15-20 minutes after task completion)

| Step | Action | Details | Checkpoint |
|------|--------|---------|------------|
| 2.1 | Create new procedure file | Copy template from 03-Working-Procedures.md | File created with ID |
| 2.2 | Fill header information | Category, Owner, Estimated Time | Header complete |
| 2.3 | Write Purpose statement | One sentence: "This procedure ensures [outcome] by [method]" | Purpose is specific and measurable |
| 2.4 | Define triggers | List all conditions that initiate this procedure | Triggers are unambiguous |
| 2.5 | List prerequisites | Access, information, tools needed before starting | Someone else could gather these |

---

### Phase 3: Write Steps (Core documentation)

| Step | Action | Details | Checkpoint |
|------|--------|---------|------------|
| 3.1 | Group into phases | Cluster related steps into 2-5 logical phases | Phases have clear boundaries |
| 3.2 | Write each step | Format: [Action verb] + [Object] + [Location/Details] | Steps start with verbs |
| 3.3 | Add checkpoints | For each step: "How do I know this is done correctly?" | Every step is verifiable |
| 3.4 | Insert decision points | Where does the procedure branch? What are the conditions? | Branches are explicit |
| 3.5 | Add troubleshooting | What commonly goes wrong? What's the fix? | Top 3 problems covered |

**Step Writing Formula:**
```
BAD:  "Handle the email"
GOOD: "Reply to customer email using Template-Response-A within 4 hours of receipt"

BAD:  "Update the system"
GOOD: "Enter invoice number in Field 3B of the Accounting Dashboard, then click Save"
```

---

### Phase 4: Validate

| Step | Action | Details | Checkpoint |
|------|--------|---------|------------|
| 4.1 | Read aloud | Read the entire procedure out loud | No confusing phrases |
| 4.2 | Check verb strength | Every step must start with actionable verb | No passive voice |
| 4.3 | Identify assumptions | What knowledge does this assume? Add to Prerequisites if needed | Novice could follow |
| 4.4 | Time estimate | Based on actual task duration, set realistic time | Time is accurate |
| 4.5 | Add to Procedure Index | Update master index in 03-Working-Procedures.md | Procedure is findable |

---

### Phase 5: Test (Critical for delegation)

| Step | Action | Details | Checkpoint |
|------|--------|---------|------------|
| 5.1 | Execute from document | Perform the task using ONLY the written procedure | No mental gap-filling |
| 5.2 | Note gaps | Where did you use knowledge not in the document? | Gaps identified |
| 5.3 | Update procedure | Add missing details discovered in 5.2 | Document updated |
| 5.4 | Have someone else test | Another person follows the procedure | They complete without asking questions |
| 5.5 | Final revision | Incorporate feedback from tester | Version incremented |

---

## Quality Checklist

Before marking a procedure "complete," verify:

- [ ] **Trigger is clear** — Someone knows exactly when to use this
- [ ] **Prerequisites are complete** — Nothing assumed or missing
- [ ] **Steps are atomic** — Each step is one action, not multiple
- [ ] **Verbs are specific** — Click, Enter, Select, Send, Open (not Handle, Process, Deal with)
- [ ] **Checkpoints exist** — Every step has a way to confirm completion
- [ ] **Decision points are explicit** — All "if/then" situations documented
- [ ] **Troubleshooting covers top 3** — Most common problems addressed
- [ ] **Time estimate is realistic** — Based on actual execution
- [ ] **A stranger could follow it** — No tribal knowledge required

---

## Procedure Naming Convention

**Format:** `WP-[XXX]-[Category]-[Name]`

**Categories:**
- OPS — Operations / Daily workflows
- FIN — Finance / Accounting
- CUS — Customer / Client facing
- TEC — Technical / Development
- ADM — Administrative
- SAL — Sales / Business development
- QA — Quality Assurance

**Examples:**
- WP-001-OPS-Weekly-Metrics-Review
- WP-012-CUS-Client-Onboarding
- WP-023-TEC-Deploy-To-Production
- WP-034-QA-Device-Test-Cycle

---

## Storage and Organization

**File Location:** `[Project]/Procedures/[Category]/WP-XXX-Name.md`

**Structure:**
```
/Procedures
  /OPS
    WP-001-OPS-Weekly-Review.md
    WP-002-OPS-Daily-Standup.md
  /CUS
    WP-010-CUS-Client-Onboarding.md
  /TEC
    WP-020-TEC-Deployment.md
  index.md (master list of all procedures)
```

---

## Maintenance Triggers

Update a procedure when:
- [ ] The task itself changes
- [ ] Tools or systems change
- [ ] Someone reports confusion or error
- [ ] You notice yourself deviating from the written steps
- [ ] Quarterly review (minimum)

---

## Time Investment Guide

| Procedure Complexity | Capture Time | Documentation Time | Total Investment |
|---------------------|--------------|-------------------|------------------|
| Simple (5-10 steps) | 5 min | 15 min | 20 min |
| Medium (10-20 steps) | 10 min | 25 min | 35 min |
| Complex (20+ steps) | 15 min | 30-45 min | 45-60 min |

**ROI Calculation:** If a procedure saves 10 minutes per occurrence and you do it weekly, a 30-minute documentation investment pays back in 3 weeks, then saves 8+ hours annually.

---

## Quick-Start: Minimum Viable Procedure

When time is short, capture at minimum:

1. **Purpose** — One sentence
2. **Trigger** — When to do this
3. **Steps** — Numbered list, verb-first
4. **Done state** — How you know it's complete

Expand later. A rough procedure is infinitely better than none.

---

## Anti-Patterns to Avoid

| Don't Do This | Do This Instead |
|---------------|-----------------|
| Document after the fact from memory | Capture in real-time while doing |
| Write paragraphs of explanation | Write numbered steps with verbs |
| Assume context | State prerequisites explicitly |
| Document everything at once | Start with highest-frequency tasks |
| Perfect the document before using | Use immediately, improve iteratively |
| Keep procedures in your head | If it's not written, it doesn't exist |

---

## Integration with Projects

**For RideCareShare:** Focus on user-facing processes first (onboarding, ride matching, donation flow)

**For STEBEQ:** Your procedures become product examples — document your own workflow automation as case studies

**For QA Work:** Test procedures, device setup, bug reporting workflows

---

*"The procedure for creating procedures is the most important procedure you'll ever write. Everything else flows from it."*
