@echo off
:: 이동할 경로를 지정하거나, 현재 배치 파일이 있는 경로로 이동합니다.
cd /d "%~dp0"

echo Gemini CLI를 실행합니다...
echo 현재 경로: %CD%
echo.

:: Gemini CLI 실행
gemini
