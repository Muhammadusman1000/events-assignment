// ...existing code...

# Events (Frontend Only) — Project Description

## Project Overview

A frontend-only React application that lists events fetched from JSONPlaceholder and provides a simple registration flow. There is no backend involved — all event data is read-only from the mock API and all user registrations are stored locally (Redux + localStorage).

## Key Features

- Fetch and render events from JSONPlaceholder on the main page
- Open a registration form for any event
- Save registration data in Redux and persist to localStorage
- Redirect to a Thank You page showing submitted details
- "My Registrations" page to view all saved registrations
- No backend or server components required

## User Flow

1. User lands on the Events (main) page and sees a list of events.
2. User clicks "Register" on an event → registration form opens (route or modal).
3. User fills and submits the form → data saved to Redux and persisted to localStorage.
4. App navigates to the Thank You page showing the registration details.
5. User can go to "My Registrations" to see all saved registrations or return to Events.

## Pages / Routes

- /events — main list of events (fetched from JSONPlaceholder)
- /events/:id/register — registration form (or presented as a modal)
- /thank-you — displays registration confirmation and details; includes "Go to Events" button
- /my-registrations — lists all registrations saved in Redux/localStorage

## Data & State Management

- Events: fetched from JSONPlaceholder (mock, read-only)
- Registrations: stored in Redux (registration slice)
- Persistence: registration slice is synced to localStorage (initialize Redux state from localStorage on app start)

## Implementation Notes

- Keep JSONPlaceholder fetch logic isolated in a service (e.g., src/services/api.js) so it can be replaced later.
- Validate form fields before dispatching registration actions.
- Use React Router for navigation and route-based pages.
- Sync Redux registration slice to localStorage on every change; hydrate Redux store from localStorage at startup.

## Quick Setup (Frontend only, Windows)

1. Open PowerShell / Command Prompt and navigate to project:
   - cd "d:\Mern stack Proejcts\events\frontend"
2. Install and run:
   - npm install
   - npm start
3. App will run in the browser (typically http://localhost:3000).

## UX Details (Registration & Thank You)

- Registration form captures necessary user fields (name, email, phone, event id, notes).
- On submit:
  - Dispatch action to add registration to Redux.
  - Persist updated registrations to localStorage.
