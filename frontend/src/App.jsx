import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MovieList from './components/MovieList';
import SeatSelection from './components/SeatSelection';
import BookingConfirmation from './components/BookingConfirmation';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header>
          <h1>MovieTicket Platform</h1>
        </header>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/shows/:showId/seats" element={<SeatSelection />} />
          <Route path="/bookings/:bookingId" element={<BookingConfirmation />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
