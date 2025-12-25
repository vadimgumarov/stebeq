# GitHub Issue Templates Setup

Set up unified issue templates in `.github/ISSUE_TEMPLATE/` for consistent issue creation.

---

## When to Use

- Setting up a new project
- Unifying templates across existing projects
- Adding new issue types

---

## Prerequisites

- GitHub repository created
- Write access to repository
- `gh` CLI authenticated

---

## Steps

### Step 1: Create Directory
```bash
mkdir -p .github/ISSUE_TEMPLATE
```

### Step 2: Create config.yml
```bash
cat > .github/ISSUE_TEMPLATE/config.yml << 'EOF'
blank_issues_enabled: false
contact_links:
  - name: Documentation
    url: https://github.com/[org]/[repo]/wiki
    about: Check the documentation before opening an issue
EOF
```

### Step 3: Create Templates

#### epic.md
```yaml
---
name: Epic
description: Large multi-issue effort
labels: ["type: epic"]
---

## Epic: [Title]

**Status:** 🚧 In Progress
**Owner:** @[username]

---

### Child Issues
- [ ] #XXX - [Title]

---

### Overview
[Description]

### Success Criteria
- [ ] All child issues complete
- [ ] Tests passing
- [ ] Documentation updated
```

#### feature.md
```yaml
---
name: Feature
description: New functionality
labels: ["type: feature"]
---

## Feature: [Name]

**Parent Epic:** #[Number] (if applicable)

---

### Summary
[Description]

### User Story
As a [role], I want [goal], so that [benefit].

### Acceptance Criteria
- [ ] [Criterion 1]
- [ ] [Criterion 2]

### Definition of Done
- [ ] Implementation complete
- [ ] Tests passing
- [ ] Documentation updated
```

#### bug.md
```yaml
---
name: Bug
description: Something broken
labels: ["type: bug"]
---

## Bug: [Description]

---

### Environment
- Platform:
- Version:
- Device:

### Steps to Reproduce
1.
2.
3.

### Expected Behavior
[What should happen]

### Actual Behavior
[What happens]

### Logs/Screenshots
[If applicable]
```

#### improvement.md
```yaml
---
name: Improvement
description: Enhancement to existing feature
labels: ["type: improvement"]
---

## Improvement: [Title]

---

### Current State
[What exists now]

### Proposed Improvement
[What should change]

### Business Value
[Why this matters]

### Acceptance Criteria
- [ ] [Criterion 1]
```

#### child-issue.md
```yaml
---
name: Child Issue
description: Child of an Epic
labels: ["type: child-issue"]
---

## [Type]: [Title]

**Parent Epic:** #[Number] - [Title]

---

### Summary
[Description]

### Acceptance Criteria
- [ ] [Criterion 1]

### Definition of Done
- [ ] Implementation complete
- [ ] Tests passing
```

### Step 4: Verify Templates
1. Go to GitHub repository
2. Click "Issues" → "New Issue"
3. Verify all templates appear
4. Test creating an issue with each template

### Step 5: Update CLAUDE.md
Add reference to templates location:
```markdown
## GITHUB ISSUES
Templates: `.github/ISSUE_TEMPLATE/`
```

---

## Template Standards

All templates should include:
- YAML frontmatter (name, description, labels)
- Structured sections
- Acceptance Criteria checklist
- Definition of Done checklist
- Consistent labeling

---

## Troubleshooting

**Templates not appearing:**
- Check file extensions are `.md`
- Verify YAML frontmatter is valid
- Clear browser cache

**Wrong labels applied:**
- Verify labels exist in repository
- Check label names match exactly

---

## Version Information
- Document Version: 1.0
- Last Updated: 2025-12-23
