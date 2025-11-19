# CLAUDE.md - Universal Development Framework v2.1

## QUICK START PROTOCOL
```
1. Read docs/CONTINUATION.md FIRST - Get current state
2. Read .claude_project - Get project context  
3. State current context - [branch: ... | issue: #... | status: ...]
4. Proceed with work following TDD methodology
5. Update docs on completion - 30 seconds
```

---

## CORE FOUNDATION
*[Always Required - Universal Across All Projects]*

### Communication Standards
- **Experience Context**: Software Architect / Senior Developer / Project manager with 20 total years of experience in launching products and working in startups - skip basics
- **Business-Friendly Language**: No jargon, explain decisions in business impact terms
- **Direct Responses Only**: No fluff, affirmations, or apologies
- **Brevity Rule**: 4 lines max unless architecture/debugging/security requires detail
- **No Emojis**: Professional communication only
- **State Tracking**: Every response must include `[branch: ... | issue: #... | status: ...]`

### Production Standards
- **Production-Ready Solutions**: Scalable, maintainable, secure by default
- **No Placeholders**: Complete implementations only - no TODOs
- **Architectural Options**: Present alternatives with trade-offs
- **Proactive Flags**: Security/performance implications upfront

### Context & Scope Management
- **Clarification First**: Ask for clarification even if in smallest doubt, never assume
- **Solution Types**: Distinguish between quick fixes and proper solutions
- **Challenge Suboptimal**: If approach is clearly suboptimal, suggest alternatives
- **Present Outcomes**: Trade-offs first, then implementation options

---

## DECISION AUTHORITY FRAMEWORK

### MUST CONSULT (never invent or assume):
- Project-wide standards (naming conventions, file structure, validation rules)
- Architecture patterns not already established in codebase
- Breaking changes to existing APIs or interfaces
- New dependencies or technology choices
- Security policies or authentication flows
- Deployment strategies or CI/CD pipeline changes

### Process for consultation:
1. State the decision that needs to be made
2. Present 2-3 options with pros/cons (include industry best practices)
3. Recommend preferred option with reasoning
4. Wait for explicit confirmation before implementing

### CAN DECIDE INDEPENDENTLY:
- Bug fixes that don't change behavior
- Code refactoring within same module (no API changes)
- Test additions or improvements
- Documentation updates
- Variable/function naming within a file

**Golden Rule**: If it sets a precedent or affects project structure → consult first

---

## ENTERPRISE TDD TESTING FRAMEWORK (MANDATORY)

### Test-First Development Process (STRICT TDD)
**Every development cycle MUST follow:**
1. **Write failing unit tests FIRST** - Define expected behavior
2. **Write minimal code** - Make tests pass
3. **Refactor** - Improve code while keeping tests green
4. **Write integration tests** - Test component interactions
5. **Write end-to-end tests** - Verify user workflows
6. **Document & commit** - Update docs and commit changes

### Test Pyramid Structure (Enterprise Level)
```
tests/
├── unit/                    # 70% - Fast, isolated (95%+ coverage target)
│   ├── [module]/           # Unit tests organized by code module
│   └── fixtures/           # Test data and mocks
├── integration/            # 20% - Real dependencies 
│   ├── [feature]/          # Integration tests by feature
│   └── contracts/          # API contract tests
├── e2e/                   # 10% - End-to-end user workflows
│   ├── [workflow]/         # Complete user journeys
│   └── performance/        # Load and performance tests
├── mutation/              # Mutation testing for test quality
├── contract/              # Consumer-driven contract tests
└── chaos/                 # Chaos engineering tests
```

### Testing Requirements (Non-Negotiable)
- **95%+ Unit Test Coverage** - No exceptions for new code
- **100% Critical Path Coverage** - E2E tests for all user workflows
- **Real Dependencies in Integration** - No mocks for databases, APIs, external services
- **Test Data Management** - Automated setup/teardown, isolated test data
- **Performance Benchmarks** - Automated performance regression detection
- **Mutation Testing** - Verify test quality with mutation testing tools
- **Property-Based Testing** - Use property-based tests for complex algorithms

### Test Quality Gates
- All tests must pass before any commit
- Performance tests must not regress beyond defined thresholds
- Security tests must pass (SAST, dependency scanning)
- Code coverage cannot decrease
- Integration tests must run against real services
- Contract tests must verify API compatibility

---

## PROCESS GATES (MANDATORY)

### Emergency Protocol
When user indicates urgency ("urgent", "ASAP", "critical", specific deadline):
- **Immediate Brief Response**: Provide actionable answer first
- **Offer Elaboration**: "Want me to elaborate on any part?"
- **Return to Normal**: Resume standard behavior after emergency

### Session Start (New Conversation)
```
1. Read docs/CONTINUATION.md → get current state (PRIORITY #1)
2. Read .claude_project → get project context
3. Run git status → assess working directory state  
4. Check recent commits → understand recent work
5. Check open issues → identify priorities
6. MANDATORY: State current context → [branch: ... | issue: #... | status: ...] → confirm understanding
```

### Session Continue (Existing Conversation)
```
1. Read docs/CONTINUATION.md → get current state if context lost (PRIORITY #1)
2. Check current branch → verify correct context
3. Check uncommitted changes → understand WIP
4. Review conversation history → maintain continuity
5. MANDATORY: State current context → [branch: ... | issue: #... | status: ...] → confirm alignment
```

### Before Making ANY Changes
```
Check clean state → git status
Uncommitted changes? → stash or commit as WIP
Verify correct branch → matches intended issue
Pull latest → git pull origin main
Branch outdated? → rebase or merge main
Conflicts? → resolve before starting new work
```

### Issue Validation (Before Starting Work)
```
Read issue → has acceptance criteria?
Dependencies listed? → check if blocked
Missing details? → ask in issue comments
Wait for clarification → don't assume
Should be in Epic? → suggest reorganization
Scope clear? → document understanding in issue
```

### Epic & Child Issue Workflow
```
Starting Epic:
1. Create Epic branch → feature/[epic#]-[brief-description]
2. Read Epic description → understand effort and Child Issues
3. Update Epic status → In Progress
4. State current context → [branch: ... | issue: #... | status: ...]

Working Child Issues (Within Epic):
1. STAY on Epic branch (no separate branch)
2. Read Child description → understand effort
3. Update Child issue status → In Progress
4. Write tests FIRST → following TDD methodology
5. Implement to pass tests
6. Commit with child issue reference → "feat: implement feature (#227)"
7. Complete child → close issue, continue next child on SAME epic branch
```

### Completing Work Protocol
```
1. Run full test suite → all tests must pass
2. Run code quality checks → linting, formatting, security
3. Update issue status → Done, close issue
4. Commit changes → proper format with issue reference
5. MANDATORY: Update PROGRESS.md → append completion entry with date
6. MANDATORY: Update CONTINUATION.md → rewrite current status completely
7. Document solution in ISSUES.md → if solved a tricky problem
8. Push branch → backup completed work
```

---

## VERSION CONTROL STANDARDS (STRICT)

### Branching Strategy (UNIVERSAL)
```
Standalone Issue → fix/[issue#]-[brief] or feat/[issue#]-[brief]
Epic → feature/[epic#]-[epic-name] (ALL child work here)
Child Issues → NO separate branches (work on epic branch)
Hotfix → hotfix/[issue#]-[brief] from main
```

### Commit Format (MANDATORY)
```
type: description (#ISSUE)

Types: feat, fix, docs, refactor, test, perf, chore
WIP prefix: for work-in-progress (tests failing acceptable)

Examples:
feat: add user authentication (#123)
fix: resolve memory leak in data processing (#124) 
test: add unit tests for payment service (#125)
refactor: improve error handling in API layer (#126)
```

### Commit Requirements (STRICT)
- **Every commit needs issue reference** (except chore commits)
- **NEVER add "🤖 Generated with Claude Code" signatures**
- **NEVER add "Co-Authored-By: Claude" signatures**  
- **NEVER mention "Claude" or "AI-generated" in commit messages**
- **Commit frequently** at logical breakpoints
- **Push daily** for backup
- **Never force push** to shared branches
- **Test before commit** - all tests must pass

---

## DOCUMENTATION STRUCTURE (MANDATORY)

### PROGRESS.md (Minimal Append-Only Log)
```markdown
## YYYY-MM-DD
- Completed: Issue #X - brief description
- Tests: [unit/integration/e2e coverage added]
- Performance: [impact if significant]
- Discovered: [key insight if any]
```

### CONTINUATION.md (Detailed Current State - Always Rewritten)
```markdown
## Current Status
- Working on: Issue #X - [detailed description of current work]
- Branch: [current branch name]
- Test Status: [current test coverage state]
- Last session: [what was accomplished in last work session]
- Current focus: [specific task being worked on right now]

## Immediate Next Steps (TDD Order)
1. [specific next test to write with full context]
2. [implementation step to make test pass]
3. [refactoring opportunity with safety considerations]
4. [integration test needed with dependencies]

## Context & Recent Decisions
- [important technical decisions made recently with reasoning]
- [architectural choices and their implications]
- [test patterns established and their rationale]
- [performance benchmarks and their targets]
- [security considerations and implemented safeguards]

## Test Status & Coverage
- Unit test coverage: [percentage]
- Integration tests: [list of covered scenarios]
- E2E tests: [list of verified workflows]
- Performance tests: [benchmarks and targets]
- Known test gaps: [areas needing test coverage]

## Session Handoff Notes
- [anything crucial for next session to know]
- [warnings or important considerations for future work]
- [specific files/areas that need attention or review]
- [any partial work or WIP that needs completion]
- [test failures or flaky tests to address]
```

### ISSUES.md (Problems & Solutions)
```markdown
## Problem: [Description]
**Symptoms**: What happens
**Root Cause**: Why it happens  
**Solution**: How to fix
**Tests Added**: What tests prevent regression
**Prevention**: How to avoid
**Related Issues**: #X, #Y
```

---

## GITHUB INTEGRATION

### Issue Templates

#### Standard Issue Template
```markdown
### Summary
[One-line description of the issue]

### Current Behavior
[What happens now]

### Expected Behavior  
[What should happen]

### Acceptance Criteria
- [ ] [Specific measurable outcome with test verification]
- [ ] [Another requirement with test coverage]
- [ ] [Unit tests written and passing]
- [ ] [Integration tests covering feature]
- [ ] [Documentation updated]

### Testing Requirements
- [ ] Unit tests achieving 95%+ coverage
- [ ] Integration tests with real dependencies
- [ ] E2E tests for user workflows
- [ ] Performance benchmarks established

### Definition of Done
- [ ] All tests passing (unit, integration, e2e)
- [ ] Code review completed
- [ ] Documentation updated
- [ ] Performance impact assessed
- [ ] Security implications reviewed
```

#### Epic Issue Template
```markdown
### Epic: [Epic Title]

### Overview
[2-3 sentences describing the epic's goal and value]

### Business Value
[Why this epic matters - impact on system/users]

### Child Issues
<!-- MANDATORY: All child tasks MUST be listed here -->
- [ ] #XXX - [First child task with test requirements]
- [ ] #XXX - [Second child task with test requirements] 
- [ ] #XXX - [Third child task with test requirements]

### Success Criteria
- [ ] [Measurable outcome with test verification]
- [ ] [Performance target with benchmarks]
- [ ] All child issues completed with full test coverage
- [ ] End-to-end user workflow verified

### Testing Strategy
- [ ] Unit test coverage plan for all components
- [ ] Integration testing approach for inter-component communication
- [ ] E2E testing scenarios for complete user workflows
- [ ] Performance testing benchmarks and targets

### Dependencies
[List any external dependencies or blockers]
```

### Label System (MANDATORY)
```
Type Labels (Pick ONE):
type: EPIC          - Epic (large multi-issue effort)
type: child-issue   - Child issue within an Epic  
type: bug           - Something isn't working
type: enhancement   - New feature or request
type: refactor      - Code improvements without behavior change
type: test          - Test additions or improvements
type: documentation - Improvements or additions to documentation
type: chore         - Maintenance (deps, configs, cleanup)
type: hotfix        - Emergency production fixes

Priority Labels (Pick ONE):
priority: critical  - System-breaking, security issues
priority: high      - Important for current phase
priority: medium    - Nice to have, can be delayed
priority: low       - Future consideration

Test Labels (Auto-applied by CI):
tests: unit         - Unit test coverage added
tests: integration  - Integration test coverage added  
tests: e2e          - End-to-end test coverage added
tests: performance  - Performance test coverage added
```

---

## RED FLAGS - STOP IMMEDIATELY

```
❌ Missing [branch: ... | issue: #... | status: ...] after 3+ responses
❌ No tests written before implementation code
❌ Test coverage below 95% for new code
❌ No commits after multiple code changes
❌ Working without issue reference number
❌ Implementing BEFORE writing failing tests (TDD violation)
❌ Completed issue but didn't update PROGRESS.md + CONTINUATION.md
❌ Starting session without reading CONTINUATION.md first
❌ Making architectural decisions without consultation
❌ Committing secrets, API keys, or sensitive data
❌ Force pushing to shared branches
❌ Changing project-wide standards without explicit approval
❌ Skipping integration tests for component interactions
❌ Mocking real dependencies in integration tests
❌ Missing performance impact assessment for changes
❌ No security review for authentication/authorization changes
```

---

## ERROR RECOVERY & TROUBLESHOOTING

### When Confused
- State what you understand
- State what's unclear  
- Ask specific question
- Don't guess or assume

### When Wrong
- State what you did
- State what was expected
- Show the difference
- **Suggest solution for immediate fix**
- **Update documentation to prevent future occurrence**
- **Add tests to prevent regression**
- Ask for next action

### When Blocked
- State the blocker with context
- Show error/issue with full details
- Suggest multiple solutions with trade-offs
- Ask for preference and reasoning

### When Tests Fail
- **NEVER skip or ignore failing tests**
- Analyze failure root cause
- Fix the code, not the test (unless test is wrong)
- Verify fix doesn't break other tests
- Document the fix for future reference

---

## QUALITY ASSURANCE (ENTERPRISE LEVEL)

### Code Quality Gates (Pre-Commit)
```
✅ All tests passing (unit, integration, e2e)
✅ Code coverage ≥ 95% for new code
✅ Performance benchmarks within acceptable range
✅ Security scan passing (SAST, dependency check)
✅ Code formatted and linted
✅ Documentation updated for significant changes
✅ No debug code or temporary hacks
✅ API contracts maintained (no breaking changes)
```

### AI-Assisted Code Review Process
```
1. AI conducts systematic code review
2. AI identifies potential issues and improvements
3. AI presents findings with specific recommendations
4. AI verifies test coverage and quality
5. Human confirms next steps and priorities
6. Address critical issues before proceeding
7. Document patterns and standards for consistency
```

### Performance Monitoring
```
✅ Key performance metrics identified and measured
✅ Automated performance testing in CI/CD
✅ Performance regression alerts configured
✅ Load testing for critical user workflows
✅ Memory and resource usage monitoring
```

---

## SCALING PREPARATION

### Solo → Team Transition Readiness
```
Documentation completeness for knowledge transfer
Code review processes established
Testing standards documented and automated
CI/CD pipeline robust and reliable
Performance monitoring and alerting configured
Security policies documented and enforced
```

### Team Collaboration Framework (Future)
```
Code review assignment and rotation
Pair programming protocols
Knowledge sharing sessions
Technical decision documentation
Conflict resolution procedures
Onboarding automation
```

---

**Framework Version**: Universal v2.1 Enterprise  
**Solo Development Optimized**: Enterprise-grade standards for single developer  
**TDD Enforcement**: Test-driven development mandatory at all levels  
**Scaling Ready**: Prepared for team collaboration evolution
