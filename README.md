# Events Registration App

A frontend-only React application for event registration with local storage persistence.

## 🚀 Quick Start

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd events-assignment

# Install dependencies
npm install

# Start development server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

## 🎯 Features

- **Event Listings**: Grid view of events with animation effects
- **Registration Flow**: Simple form with validation
- **Local Storage**: Persists user registrations
- **Responsive Design**: Mobile-friendly layout
- **Animation Effects**: Using Framer Motion

## 🏗️ Architecture

### Tech Stack

- React
- Redux (State Management)
- React Router (Navigation)
- Framer Motion (Animations)
- TailwindCSS (Styling)

### Key Components

- `Card.js` - Event display cards
- `Register.js` - Registration form
- `RegistrationConfirmation.js` - Success page
- `MyRegistrations.js` - User registrations list

### Data Flow

1. Events fetched from JSONPlaceholder API
2. User registrations stored in Redux
3. Redux state synced with localStorage
4. Form validation before submission

## 📱 Pages & Routes

| Route                        | Description         |
| ---------------------------- | ------------------- |
| `/`                          | Main events listing |
| `/register/:id`              | Registration form   |
| `/registration-confirmation` | Success page        |
| `/my-registrations`          | Saved registrations |

## 💾 State Management

```javascript
// Redux Store Structure
{
  events: {
    data: [],
    loading: false,
    error: null
  },
  selectedEvent: [
    // User registrations
  ]
}
```

## 🔧 Development

### Prerequisites

- Node.js 14+
- npm/yarn

### Environment Setup

Create `.env` file in root:

```env
REACT_APP_API_URL=https://jsonplaceholder.typicode.com
```

### Running Tests

```bash
npm test
```

## 📝 Project Structure

```
src/
├── components/     # Reusable components
├── screens/       # Page components
├── store/         # Redux setup
│   └── slices/    # Redux slices
├── styles/        # Global styles
└── utils/         # Helper functions
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📄 License

MIT License - feel free to use and modify
