# GitHub Labels Setup

Set up unified labels for consistent issue categorization.

---

## When to Use

- Setting up a new project
- Unifying labels across existing projects
- Adding new label categories

---

## Prerequisites

- GitHub repository created
- Write access to repository
- `gh` CLI authenticated

---

## Label Categories

### Type Labels
| Label | Color | Description |
|-------|-------|-------------|
| type: epic | 5319E7 | Large multi-issue effort |
| type: feature | 0E8A16 | New functionality |
| type: bug | D73A4A | Something broken |
| type: improvement | A2EEEF | Enhancement |
| type: child-issue | C5DEF5 | Child of Epic |
| type: refactor | FEF2C0 | Code improvements |
| type: chore | EDEDED | Maintenance |
| type: hotfix | B60205 | Emergency fix |

### Priority Labels
| Label | Color | Description |
|-------|-------|-------------|
| priority: critical | B60205 | System-breaking |
| priority: high | D93F0B | Important for current phase |
| priority: medium | FBCA04 | Can be delayed |
| priority: low | 0E8A16 | Future consideration |

### Area Labels (Project-Specific)
| Label | Color | Description |
|-------|-------|-------------|
| area: backend | 1D76DB | Backend/API |
| area: frontend | 5319E7 | Frontend/UI |
| area: mobile | 006B75 | Mobile app |
| area: database | 0052CC | Database/schema |
| area: infrastructure | FBCA04 | DevOps/CI/CD |

### Status Labels (Optional)
| Label | Color | Description |
|-------|-------|-------------|
| status: blocked | D73A4A | Blocked by dependency |
| status: needs-review | FBCA04 | Requires discussion |
| status: in-progress | 0E8A16 | Currently being worked |

---

## Steps

### Step 1: List Existing Labels
```bash
gh label list
```

### Step 2: Delete Default Labels (Optional)
```bash
# Remove GitHub default labels if not needed
gh label delete "bug" --yes
gh label delete "documentation" --yes
gh label delete "duplicate" --yes
gh label delete "enhancement" --yes
gh label delete "good first issue" --yes
gh label delete "help wanted" --yes
gh label delete "invalid" --yes
gh label delete "question" --yes
gh label delete "wontfix" --yes
```

### Step 3: Create Type Labels
```bash
gh label create "type: epic" --color "5319E7" --description "Large multi-issue effort"
gh label create "type: feature" --color "0E8A16" --description "New functionality"
gh label create "type: bug" --color "D73A4A" --description "Something broken"
gh label create "type: improvement" --color "A2EEEF" --description "Enhancement"
gh label create "type: child-issue" --color "C5DEF5" --description "Child of Epic"
gh label create "type: refactor" --color "FEF2C0" --description "Code improvements"
gh label create "type: chore" --color "EDEDED" --description "Maintenance"
gh label create "type: hotfix" --color "B60205" --description "Emergency fix"
```

### Step 4: Create Priority Labels
```bash
gh label create "priority: critical" --color "B60205" --description "System-breaking"
gh label create "priority: high" --color "D93F0B" --description "Important for current phase"
gh label create "priority: medium" --color "FBCA04" --description "Can be delayed"
gh label create "priority: low" --color "0E8A16" --description "Future consideration"
```

### Step 5: Create Area Labels
```bash
# Customize for your project
gh label create "area: backend" --color "1D76DB" --description "Backend/API"
gh label create "area: frontend" --color "5319E7" --description "Frontend/UI"
gh label create "area: mobile" --color "006B75" --description "Mobile app"
gh label create "area: database" --color "0052CC" --description "Database/schema"
gh label create "area: infrastructure" --color "FBCA04" --description "DevOps/CI/CD"
```

### Step 6: Create Status Labels (Optional)
```bash
gh label create "status: blocked" --color "D73A4A" --description "Blocked by dependency"
gh label create "status: needs-review" --color "FBCA04" --description "Requires discussion"
gh label create "status: in-progress" --color "0E8A16" --description "Currently being worked"
```

### Step 7: Verify Labels
```bash
gh label list
```

---

## Usage Examples

```bash
# Create Epic issue
gh issue create --title "Epic: User Authentication" \
  --label "type: epic" \
  --label "priority: critical" \
  --label "area: backend"

# Create Bug issue
gh issue create --title "Bug: Login fails on iOS" \
  --label "type: bug" \
  --label "priority: high" \
  --label "area: mobile"

# Create Child issue
gh issue create --title "Implement JWT tokens" \
  --label "type: child-issue" \
  --label "priority: high" \
  --label "area: backend"
```

---

## Troubleshooting

**Label already exists:**
```bash
# Update existing label
gh label edit "bug" --name "type: bug" --color "D73A4A"
```

**Permission denied:**
- Verify you have write access to repository
- Check `gh auth status`

---

## Version Information
- Document Version: 1.0
- Last Updated: 2025-12-23
