# 🍜 Chopper's Hanoi Meal Timetable

A charming, interactive web application that combines Tony Tony Chopper's playful personality with a functional meal tracking system. Track your favorite Hanoi Vietnamese meals throughout the year with a beautiful monthly calendar interface.

![Chopper's Hanoi Meal Timetable](https://img.shields.io/badge/React-19.2.1-blue?logo=react) ![License](https://img.shields.io/badge/License-MIT-green) ![Status](https://img.shields.io/badge/Status-Active-brightgreen)

## ✨ Features

- **Interactive Monthly Calendar**: Browse through 12 months with a clean, intuitive calendar view
- **Random Meal Selector**: Click "What to eat today?" to randomly select from 52 authentic Hanoi Vietnamese meals
- **Accept/Reject Workflow**: Accept meals to add them to your calendar or reject to get a new suggestion
- **Meal Images**: Each meal displays a beautiful image both in the selector modal and in the calendar cells
- **Today's Highlight**: Current date is highlighted with a distinctive pink border
- **Responsive Design**: Fully responsive interface that works on desktop, tablet, and mobile devices
- **Smooth Animations**: Delightful micro-interactions and transitions throughout the app
- **Accessibility**: WCAG-compliant with proper semantic HTML and screen reader support

## 🎨 Design Philosophy

The interface combines Chopper's cheerful, approachable personality with a structured, organized layout. The warm brown and soft pink color palette creates an inviting atmosphere while maintaining medical precision and clarity.

**Color Palette:**
- Primary: Warm Brown (#8B6F47)
- Secondary: Soft Pink (#E8A5C0)
- Background: Cream (#F5F1E8)
- Accent: Coral Red (#FF6B6B)

## 🍲 Included Hanoi Meals

The application features 52 authentic Hanoi Vietnamese meals including:
- Phở Bò (Beef Pho)
- Bún Chả (Grilled Pork with Noodles)
- Bánh Mì (Vietnamese Sandwich)
- Cơm Tấm (Broken Rice)
- Egg Coffee
- And 47 more traditional dishes!

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm 10.4.1+ (or npm/yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/chopper-timetable.git
cd chopper-timetable

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

The application will be available at `http://localhost:3000`

## 📦 Build & Deploy

```bash
# Build for production
pnpm build

# Preview production build
pnpm preview

# Start production server
pnpm start
```

## 🛠️ Development

### Project Structure

```
chopper-timetable/
├── client/
│   ├── public/              # Static files
│   ├── src/
│   │   ├── pages/          # Page components
│   │   │   ├── Home.tsx    # Main timetable page
│   │   │   └── Home.css    # Page styles
│   │   ├── components/     # Reusable UI components
│   │   ├── hooks/          # Custom React hooks
│   │   │   └── useMeals.ts # Meal data hook
│   │   ├── contexts/       # React contexts
│   │   ├── lib/            # Utility functions
│   │   ├── App.tsx         # Main app component
│   │   ├── main.tsx        # Entry point
│   │   └── index.css       # Global styles
│   └── index.html          # HTML template
├── server/                  # Backend server (Express)
├── shared/                  # Shared types and constants
├── meals-data.json         # Meal database with images and descriptions
├── package.json            # Dependencies
└── tsconfig.json           # TypeScript configuration
```

### Available Scripts

```bash
# Development
pnpm dev          # Start dev server with hot reload
pnpm check        # Type check with TypeScript
pnpm format       # Format code with Prettier

# Production
pnpm build        # Build for production
pnpm start        # Start production server
pnpm preview      # Preview production build
```

### Technology Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS 4
- **UI Components**: shadcn/ui, Radix UI
- **Routing**: Wouter (lightweight client-side router)
- **Styling**: Tailwind CSS with custom theme
- **Build Tool**: Vite
- **Package Manager**: pnpm
- **Backend**: Express.js (optional, for static deployment)

## 🎯 How to Use

1. **View Calendar**: Navigate through months using the Previous/Next buttons
2. **Select a Meal**: Click the "🍜 What to eat today?" button
3. **Make a Choice**: 
   - Click "✅ Let's go!" to accept the meal and add it to today's date
   - Click "😒 Eww no!" to reject and get a new suggestion
4. **Track Progress**: Watch your calendar fill with beautiful meal images as you make selections
5. **Navigate Months**: Use the month navigation to browse through the year

## 🔄 Data Persistence

Currently, meal selections are stored in browser memory. For persistent storage across sessions, consider implementing:
- LocalStorage for client-side persistence
- Backend database for cloud sync
- Export/Import functionality for backup

## 🎨 Customization

### Adding New Meals

Edit `meals-data.json` to add new meals:

```json
{
  "id": 53,
  "name": "Your Meal Name",
  "description": "Meal description",
  "category": "category",
  "image": "https://your-image-url.jpg"
}
```

### Changing Colors

Edit `client/src/index.css` to modify the color theme:

```css
:root {
  --primary: #8B6F47;
  --secondary: #E8A5C0;
  --background: #F5F1E8;
  /* ... more colors */
}
```

## 🐛 Known Limitations

- Meal selections are not persisted across browser sessions (localStorage integration needed)
- Mobile view shows smaller calendar cells (consider adding a week view option)
- No meal filtering or search functionality yet

## 🚧 Future Enhancements

- [ ] LocalStorage persistence for meal history
- [ ] Statistics dashboard showing meal frequency and favorites
- [ ] Export meal history as PDF or CSV
- [ ] Share meal selections with friends
- [ ] Dark mode theme option
- [ ] Weekly view for mobile devices
- [ ] Meal recommendations based on history
- [ ] Integration with recipe websites

## 📱 Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Android

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Tony Tony Chopper** - Character inspiration from One Piece by Eiichiro Oda
- **Hanoi Cuisine** - Traditional Vietnamese meals and culinary heritage
- **shadcn/ui** - Beautiful component library
- **Radix UI** - Accessible component primitives

## 📧 Contact & Support

For questions, issues, or suggestions, please open an issue on GitHub or contact the maintainers.

---

**Made with ❤️ and a love for Vietnamese food and anime**
