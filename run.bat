@echo off
REM =============================================================
REM  run.bat  –  Levanta, despliega o limpia el proyecto
REM  Uso:
REM     run           → docker compose up --build
REM     run k8s       → kubectl apply -f k8s\
REM     run clean     → docker compose down + kubectl delete -f k8s\
REM =============================================================

REM Cambia a la carpeta donde está este BAT
cd /d %~dp0

set CMD=%1
if "%CMD%"=="" set CMD=docker

REM -------- comprobar herramientas necesarias ----------
where docker >NUL 2>&1 || (
  echo [ERROR] No se encontró Docker en el PATH.
  pause & exit /b 2
)

if "%CMD%"=="k8s" (
  where kubectl >NUL 2>&1 || (
    echo [ERROR] No se encontró kubectl en el PATH.
    pause & exit /b 2
  )
)

REM -------- ejecutar la orden solicitada ---------------
if /I "%CMD%"=="docker" (
  echo.
  echo *** Construyendo e iniciando contenedores con Docker Compose ***
  docker compose --progress=plain up --build
  goto :eof
)

if /I "%CMD%"=="k8s" (
  echo.
  echo *** Creando imágenes locales ***
  docker build -t host:latest      host
  docker build -t projects:latest  mfe-projects
  docker build -t tasks:latest     mfe-tasks
  echo.
  echo *** Aplicando manifiestos Kubernetes ***
  kubectl apply -f k8s
  echo.
  echo Despliegue completado. Ver servicios con: kubectl get svc
  goto :eof
)

if /I "%CMD%"=="clean" (
  echo.
  echo *** Eliminando stack Docker ***
  docker compose down -v --remove-orphans
  if exist k8s (
    kubectl delete -f k8s --ignore-not-found
  )
  echo Limpieza terminada.
  goto :eof
)

REM -------- ayuda en caso de parámetro desconocido -----
echo Uso:  run [docker^|k8s^|clean]
exit /b 1
