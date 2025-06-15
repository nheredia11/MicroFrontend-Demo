# 🚀 Microfrontend Demo con Docker y Kubernetes

Este proyecto es una demostración práctica de una arquitectura de **Microfrontends** utilizando `Module Federation` de Webpack, Docker y (opcionalmente) Kubernetes. Incluye un contenedor principal (`host`) y dos microfrontends independientes: `Projects` y `Tasks`.

---

## 📦 Estructura del Proyecto
microfrontend-demo/

├── host/ # Contenedor principal (Shell)

├── mfe-projects/ # Microfrontend para proyectos

├── mfe-tasks/ # Microfrontend para tareas

├── k8s/ # Manifiestos Kubernetes (opcional)

├── docker-compose.yml

├── run.bat # Script de arranque para Windows


---

## 🛠️ Tecnologías Usadas

- ⚛️ React
- 📦 Webpack 5 (Module Federation)
- 🐳 Docker + Docker Compose
- ☸️ Kubernetes (opcional)
- 📁 Microfrontend Architecture

---

## 🚀 Cómo ejecutar el proyecto

### ✅ Requisitos

- Docker Desktop instalado y corriendo
- Git
- PowerShell o CMD
- (Opcional) `kubectl` si vas a usar Kubernetes

### 🔧 Paso a paso

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/microfrontend-demo.git
   cd microfrontend-demo
2. Ejecuta el proyecto:
   ```bash
   run.bat
3. Abre tu navegador:
   ```bash
   http://localhost:8080


## ✨ Características
- Separación clara por responsabilidad usando Microfrontends
- Comunicación entre módulos con Module Federation
- Preparado para escalar con Kubernetes
- Contenedor host que orquesta Projects y Tasks
- Compatible con Docker Desktop y entornos reales

## 👨‍💻 Autor
### Néstor David Heredia Gutiérrez
💻 Estudiante de Ingeniería en Sistemas
🌎 Colombia
