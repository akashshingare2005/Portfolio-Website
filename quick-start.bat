@echo off
echo ============================================
echo Akash Shingare Portfolio - Quick Start
echo ============================================
echo.
echo Choose an option:
echo 1. Install both frontend and backend dependencies
echo 2. Start backend (npm run dev)
echo 3. Start frontend (npm run dev)
echo 4. Build frontend for production
echo 5. Check backend health
echo.
set /p choice="Enter your choice (1-5): "

if "%choice%"=="1" (
    echo Installing backend dependencies...
    cd server
    call npm install
    cd ..
    echo.
    echo Installing frontend dependencies...
    cd client
    call npm install
    cd ..
    echo Done!
)

if "%choice%"=="2" (
    echo Starting backend server on http://localhost:5000
    cd server
    call npm run dev
)

if "%choice%"=="3" (
    echo Starting frontend server on http://localhost:5173
    cd client
    call npm run dev
)

if "%choice%"=="4" (
    echo Building frontend for production...
    cd client
    call npm run build
    cd ..
    echo Build complete! Check dist/ folder
)

if "%choice%"=="5" (
    echo Checking backend health...
    curl http://localhost:5000/api/health
)

pause
