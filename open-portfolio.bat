@echo off
echo Starting portfolio dev server...
start "Portfolio Dev" cmd /k "cd /d %~dp0 && npm run dev"
timeout /t 8 /nobreak >nul
start http://127.0.0.1:3000
echo Browser opened at http://127.0.0.1:3000
echo If the page is blank, wait 30 seconds and refresh.
