import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { useMeals, type Meal } from '@/hooks/useMeals';
import './Home.css';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function Home() {
  const { meals, loading } = useMeals();
  const [mealEntries, setMealEntries] = useState<Record<string, number>>({});
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [currentMeal, setCurrentMeal] = useState<Meal | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [usedMealIds, setUsedMealIds] = useState<Set<number>>(new Set());
  const [currentMonthIndex, setCurrentMonthIndex] = useState(new Date().getMonth());

  // Get today's date in YYYY-MM-DD format
  const getTodayString = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  // Get a random meal that hasn't been used yet
  const getRandomMeal = () => {
    if (meals.length === 0) return null;

    const availableMeals = meals.filter(
      (meal: Meal) => !usedMealIds.has(meal.id)
    );

    if (availableMeals.length === 0) {
      // Reset if all meals have been used
      setUsedMealIds(new Set());
      return meals[Math.floor(Math.random() * meals.length)];
    }

    return availableMeals[Math.floor(Math.random() * availableMeals.length)];
  };

  // Handle "What to eat today?" button click
  const handleWhatToEatClick = () => {
    const today = getTodayString();
    setSelectedDate(today);
    const meal = getRandomMeal();
    if (meal) {
      setCurrentMeal(meal);
      setIsModalOpen(true);
    }
  };

  // Handle accept meal
  const handleAcceptMeal = () => {
    if (selectedDate && currentMeal) {
      setMealEntries(prev => ({
        ...prev,
        [selectedDate]: currentMeal.id
      }));
      setUsedMealIds(prev => new Set([...Array.from(prev), currentMeal.id]));
      setIsModalOpen(false);
      setCurrentMeal(null);
    }
  };

  // Handle reject meal
  const handleRejectMeal = () => {
    const meal = getRandomMeal();
    if (meal) {
      setCurrentMeal(meal);
    }
  };

  // Get meal info by ID
  const getMealById = (id: number): Meal | undefined => {
    return meals.find((meal: Meal) => meal.id === id);
  };

  // Generate calendar days for a given month
  const generateMonthDays = (monthIndex: number) => {
    const today = new Date();
    const year = today.getFullYear();
    const firstDay = new Date(year, monthIndex, 1);
    const lastDay = new Date(year, monthIndex + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days: (number | null)[] = [];

    // Add empty slots for days before the month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  const monthDays = generateMonthDays(currentMonthIndex);
  const today = new Date();
  const year = today.getFullYear();

  if (loading) {
    return (
      <div className="home-container">
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p>Loading meals data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Chopper's Hanoi Meal Timetable</h1>
            <p className="hero-subtitle">
              Track your favorite Vietnamese meals throughout the year with Chopper's guidance!
            </p>
            <Button
              onClick={handleWhatToEatClick}
              className="what-to-eat-btn"
              size="lg"
            >
              🍜 What to eat today?
            </Button>
          </div>
          <div className="hero-image">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663416084659/5pwSdr3Eej9GneknZuX5Hx/chopper-character-v2-HJFNcWT6dKzNQvRmEFomWL.webp"
              alt="Tony Tony Chopper"
              className="chopper-character"
            />
          </div>
        </div>
        <div
          className="hero-background"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663416084659/5pwSdr3Eej9GneknZuX5Hx/chopper-hero-bg-92knDsuhjyrLvFbGhWC9Ai.webp)',
          }}
        />
      </section>

      {/* Timetable Section */}
      <section className="timetable-section">
        <div className="timetable-header">
          <h2>Your Monthly Meal Journey - {MONTHS[currentMonthIndex]} {year}</h2>
          <p className="timetable-subtitle">
            Click "What to eat today?" to add meals to your calendar!
          </p>
        </div>

        {/* Month Navigation */}
        <div className="month-navigation">
          <Button
            onClick={() => setCurrentMonthIndex((prev) => (prev - 1 + 12) % 12)}
            variant="outline"
            className="nav-button"
          >
            ← Previous
          </Button>
          <span className="current-month">{MONTHS[currentMonthIndex]} {year}</span>
          <Button
            onClick={() => setCurrentMonthIndex((prev) => (prev + 1) % 12)}
            variant="outline"
            className="nav-button"
          >
            Next →
          </Button>
        </div>

        <div className="timetable-container">
          {/* Day headers */}
          <div className="days-of-week">
            {DAYS_OF_WEEK.map((day) => (
              <div key={day} className="day-header">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="calendar-grid">
            {monthDays.map((day, index) => {
              if (day === null) {
                return <div key={`empty-${index}`} className="calendar-cell empty"></div>;
              }

              const dateString = `${year}-${String(currentMonthIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
              const mealId = mealEntries[dateString];
              const meal = mealId ? getMealById(mealId) : null;
              const isToday = dateString === getTodayString();

              return (
                <div
                  key={dateString}
                  className={`calendar-cell ${isToday ? 'is-today' : ''} ${mealId ? 'has-meal' : ''}`}
                  title={meal ? `${meal.name}: ${meal.description}` : dateString}
                >
                  <div className="cell-date">{day}</div>
                  {meal && (
                    <div className="meal-image-wrapper">
                      <img
                        src={meal.image}
                        alt={meal.name}
                        className="meal-image"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meal Selector Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="meal-modal">
          <VisuallyHidden>
            <DialogTitle>Select a meal for today</DialogTitle>
          </VisuallyHidden>
          <div className="meal-modal-content">
            {currentMeal && (
              <>
                <div className="meal-image-container">
                  <img
                    src={currentMeal.image}
                    alt={currentMeal.name}
                    className="modal-meal-image"
                  />
                </div>

                <div className="meal-info">
                  <h3 className="meal-name-large">{currentMeal.name}</h3>
                  <p className="meal-description">{currentMeal.description}</p>
                </div>

                <div className="meal-actions">
                  <Button
                    onClick={handleAcceptMeal}
                    className="btn-accept"
                    size="lg"
                  >
                    ✅ Let's go!
                  </Button>
                  <Button
                    onClick={handleRejectMeal}
                    className="btn-reject"
                    variant="outline"
                    size="lg"
                  >
                    😒 Eww no!
                  </Button>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
