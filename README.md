# Projet : Gestion Plateforme de Suivi de Stocks

## Description
Application backend modulaire Node.js + Express connectée à PostgreSQL pour gérer les stocks.

## Endpoints API
- GET /stocks → Liste des stocks
- POST /stocks → Ajouter un stock (JSON : name, quantity)
- DELETE /stocks/:id → Supprimer un stock

## Démarrage
1. Créez la base PostgreSQL :
   ```sql
   CREATE DATABASE stockdb;
   \c stockdb
   CREATE TABLE stocks (
       id SERIAL PRIMARY KEY,
       name TEXT NOT NULL,
       quantity INTEGER NOT NULL
   );
   ```
2. Configurez les infos PostgreSQL dans config/db.js (user, password, etc.)
3. Installez les dépendances et lancez le serveur :
   ```bash
   npm install
   npm start
   ```
