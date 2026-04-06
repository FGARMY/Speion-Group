# Data Models

## Users
- id (uuid, PK)
- email (string, unique)
- password_hash
- role (user / admin)
- created_at

## Businesses
- id (uuid, PK)
- user_id (FK → Users.id)
- name
- industry
- country
- created_at

## Projects (Websites / Systems)
- id (uuid, PK)
- business_id (FK)
- name
- type (website / automation / system)
- status (draft / active / archived)
- created_at

## Leads
- id (uuid, PK)
- project_id (FK)
- name
- email
- phone
- message
- source (website / form / api)
- status (new / contacted / converted)
- created_at

## Products (for export sites)
- id (uuid, PK)
- project_id (FK)
- name
- description
- price (optional)
- media_url
- created_at

## Inquiries
- id (uuid, PK)
- lead_id (FK)
- product_id (FK, nullable)
- message
- created_at

## Automations
- id (uuid, PK)
- project_id (FK)
- trigger (form_submit / time / webhook)
- action (email / notify / webhook)
- status (active / paused)

## Subscriptions
- id (uuid, PK)
- user_id (FK)
- plan (basic / pro)
- status (active / canceled)
- renew_date

## Relationships
- User → Business (1:N)
- Business → Projects (1:N)
- Project → Leads (1:N)
- Project → Products (1:N)
- Leads → Inquiries (1:N)