#!/bin/pwsh

Write-Host "============================================" -ForegroundColor Cyan
Write-Host "Akash Shingare Portfolio - Quick Start" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

$choice = Read-Host @"
Choose an option:
1. Install both frontend and backend dependencies
2. Start backend (npm run dev)
3. Start frontend (npm run dev)
4. Build frontend for production
5. Check backend health
6. View portfolio data summary

Enter your choice (1-6)
"@

switch ($choice) {
    "1" {
        Write-Host "Installing backend dependencies..." -ForegroundColor Yellow
        Set-Location "server"
        npm install
        Set-Location ..
        Write-Host ""
        Write-Host "Installing frontend dependencies..." -ForegroundColor Yellow
        Set-Location "client"
        npm install
        Set-Location ..
        Write-Host "✓ Installation complete!" -ForegroundColor Green
    }
    "2" {
        Write-Host "Starting backend server on http://localhost:5000" -ForegroundColor Green
        Set-Location "server"
        npm run dev
    }
    "3" {
        Write-Host "Starting frontend server on http://localhost:5173" -ForegroundColor Green
        Set-Location "client"
        npm run dev
    }
    "4" {
        Write-Host "Building frontend for production..." -ForegroundColor Yellow
        Set-Location "client"
        npm run build
        Set-Location ..
        Write-Host "✓ Build complete! Check dist/ folder" -ForegroundColor Green
    }
    "5" {
        Write-Host "Checking backend health..." -ForegroundColor Yellow
        Invoke-WebRequest -Uri "http://localhost:5000/api/health" -UseBasicParsing | Select-Object -ExpandProperty Content
    }
    "6" {
        Write-Host "Portfolio Data Summary:" -ForegroundColor Cyan
        Write-Host "========================" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "📊 Skills: 34+ (organized in 6 categories)" -ForegroundColor Green
        Write-Host "📚 Projects: 8 (Web, AI, Desktop, E-commerce)" -ForegroundColor Green
        Write-Host "🎓 Education: 3 milestones (10th → 12th → B.Tech)" -ForegroundColor Green
        Write-Host ""
        Write-Host "Full details in: UPDATES_SUMMARY.md" -ForegroundColor Yellow
    }
    default {
        Write-Host "Invalid choice!" -ForegroundColor Red
    }
}

Read-Host "Press Enter to exit"
