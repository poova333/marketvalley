# GitHub Push Guide for market-snap-main

## Current Status
- Git repo on `main`, remote: https://github.com/poova333/marketvalley.git
- Untracked: `marketvalley/` (nested repo?)
- Up to date with origin/main

## Steps to Push Changes to GitHub

### 1. Check Status
```bash
git status
```
*Example Output:*
```
On branch main
Untracked files:
  marketvalley/
```

### 2. (Optional) Handle Nested Repo
If you don't want nested .git:
```bash
rm -rf marketvalley/.git/
```
Else add as-is.

### 3. Add Files
```bash
git add .
# Or specific: git add marketvalley/
```

### 4. Commit Changes
```bash
git commit -m \"Add marketvalley dir and updates\"
```
*Example:*
```
[main abc1234] Add marketvalley dir and updates
 1 file changed, 10 insertions(+)
```

### 5. Push to GitHub
```bash
git push origin main
```
*Example Output:*
```
Enumerating objects: 5, done.
...
To https://github.com/poova333/marketvalley.git
   abc123..def456  main -> main
```

### 6. Verify
- Visit: https://github.com/poova333/marketvalley
- `git log --oneline` for history



### VS Code GitHub Push (No Terminal Needed)

1. **Open Source Control**: Ctrl+Shift+G (or sidebar Git icon).
2. **Stage Changes**: Click `+` on `marketvalley/` (or Stage All `... > Stage All Changes`).
3. **Commit**: Enter message e.g. "Add marketvalley dir", Ctrl+Enter.
4. **Push**: Click `... > Push` or Sync Changes (↑↓ icon). Or Ctrl+Shift+P > "Git: Push".

*Shortcut*: Ctrl+Shift+P > "Git: Push" (after stage/commit).

### Bonus: Install GitHub CLI (gh) for easier auth/PRs
```bash
sudo apt update && sudo apt install gh
gh auth login
gh repo view
```

### Lovable Sync
Pushes auto-sync to Lovable project.

### Run Project
```bash
npm install  # if needed
npm run dev  # http://localhost:5173
```

Run commands in order. After push, delete this TODO.md or mark done.

