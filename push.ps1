# PowerShell Script to Auto Commit + Push to GitHub
# Save as: push.ps1

Write-Host "=== Git Auto Push Script ===" -ForegroundColor Cyan

# Ask for commit message
$commitMessage = Read-Host "Enter commit message"

# Run Git commands
git add .
git commit -m "$commitMessage"
git push

Write-Host "`nPUSH SUCCESSFUL!" -ForegroundColor Green
