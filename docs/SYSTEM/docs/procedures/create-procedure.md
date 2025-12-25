# Create Procedure

How to create new procedure documents that are consistent, complete, and useful.

---

## When to Create a Procedure

Create a procedure when **ALL** of these are true:

1. **Repeatable process** - Will be done more than once
2. **Multiple steps** - Not a single command or action
3. **Not obvious** - Someone else wouldn't know how to do it
4. **Consequences for errors** - Doing it wrong causes problems

**Examples that warrant procedures:**
- Device/environment setup
- Deployment workflows
- Integration configurations
- Debugging techniques
- Data migrations

**Examples that DON'T need procedures:**
- Single commands (document in README)
- One-time setup (document in ISSUES.md)
- Obvious workflows (git clone, npm install)

---

## Naming Convention

```
docs/procedures/[verb]-[noun].md
```

**Good names:**
- `create-procedure.md`
- `setup-database.md`
- `deploy-production.md`
- `debug-websocket.md`

**Bad names:**
- `procedure.md` (too vague)
- `how-to-do-the-thing.md` (too long)
- `DatabaseSetup.md` (wrong case)

---

## Procedure Template

```markdown
# [Procedure Title]

[One paragraph: what this procedure accomplishes]

---

## When to Use

- [Trigger 1]
- [Trigger 2]

---

## Prerequisites

- [Requirement 1]
- [Requirement 2]

---

## Steps

### Step 1: [Action]
```bash
[exact command]
```
- [What to verify]
- [Expected output]

### Step 2: [Action]
...

---

## Verification

- [ ] [Check 1]
- [ ] [Check 2]

---

## Troubleshooting

**[Problem 1]:**
- Cause: [why]
- Fix: [how]

**[Problem 2]:**
...

---

## Version Information
- Document Version: X.X
- Last Updated: YYYY-MM-DD
- Tested On: [OS, versions, devices]
```

---

## Quality Requirements

### Must Have
- **No assumptions** - Document as if reader has never done this
- **Exact commands** - Copy-paste ready, no unexplained placeholders
- **Expected output** - Show what success looks like
- **Verification steps** - How to confirm it worked
- **Tested** - Only document verified working procedures

### Must NOT Have
- Opinions or preferences (just facts)
- Vague steps ("configure as needed")
- Missing context ("you know what to do")
- Outdated information

---

## Steps to Create

### Step 1: Identify the Need
- What process keeps being repeated?
- What's error-prone without documentation?
- What would a new team member struggle with?

### Step 2: Draft the Procedure
- Follow the template above
- Write while doing the task (capture exact steps)
- Include every command and click

### Step 3: Test the Procedure
- Follow your own procedure from scratch
- Note any missing steps or unclear instructions
- Update based on what you discover

### Step 4: Save and Reference
```bash
# Save in procedures folder
docs/procedures/[name].md

# Reference from other docs if needed
See: `docs/procedures/[name].md`
```

### Step 5: Update Index (if applicable)
Add to CLAUDE.md procedures section or relevant documentation.

---

## Verification

- [ ] Follows naming convention
- [ ] Uses standard template
- [ ] All commands are exact (copy-paste ready)
- [ ] Expected outputs documented
- [ ] Tested by following the procedure
- [ ] Troubleshooting section included

---

## Version Information
- Document Version: 1.0
- Last Updated: 2025-12-23
