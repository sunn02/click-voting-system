# Click Voting System

## Índice

* [Descripción](#descripción)
* [Funcionalidades](#funcionalidades)
* [Tecnologías](#tecnologías)
* [Instalación y Ejecución Local](#instalación-y-ejecución-local)
   * [Backend](#backend)
   * [Frontend](#frontend)
* [Despliegue Público](#despliegue-público)
* [Endpoints Disponibles](#endpoints-disponibles-backend)
* [Preview](#preview)

---

## Descripción

Click Voting System es una aplicación web de votación de películas que permite a los usuarios explorar, buscar y votar por sus películas favoritas.
El proyecto está construido con **Angular** en el frontend y **Node.js + Express + Prisma + PostgreSQL** en el backend, con despliegue público en **Netlify** (frontend) y **Render** (backend).

---

## Funcionalidades

* Listar todas las películas disponibles.
* Crear nuevas películas.
* Eliminar películas existentes.
* Votar por películas.
* Buscar películas por título.
* Obtener información de películas desde una API externa.
* Interacción con la API pública desplegada.
* Backend preparado para CORS, accesible desde cualquier origen.

---

## Tecnologías

**Frontend:**

* Angular
* TypeScript
* SCSS
* PrimeIcons

**Backend:**

* Node.js + Express
* Prisma ORM
* PostgreSQL
* CORS habilitado para frontend público

---

## Instalación y Ejecución Local

### Backend

```bash
cd backend
npm install
npx prisma migrate dev   # crear base de datos local
npm run dev
```

### Frontend

```bash
cd frontend
npm install
ng serve
```

> Nota: el proxy de desarrollo permite que Angular llame al backend local. En producción se usa la URL pública del backend.

---

## Despliegue Público

* **Frontend:** [Netlify](https://click-system.netlify.app/)
* **Backend:** [Render](https://click-voting-system.onrender.com/)

---

## Endpoints Disponibles (Backend)

| Método | Endpoint         | Descripción                                       |
| ------ | ---------------- | ------------------------------------------------- |
| GET    | `/api/movies`    | Obtener todas las películas                       |
| POST   | `/api/movie`     | Crear una nueva película                          |
| DELETE | `/api/movie/:id` | Eliminar una película por ID                      |
| POST   | `/api/vote/:id`  | Votar por una película                            |
| GET    | `/api/search`    | Buscar películas por título                       |
| GET    | `/api/movie`     | Obtener información de película desde API externa |

---

## Preview
[![image.png](https://i.postimg.cc/QCVYym3r/image.png)](https://postimg.cc/8fQbFhcy)


