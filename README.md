# CineScope - Movie Search Application Using Public API

## Abstract
CineScope is a beginner-friendly movie search and discovery web application designed for a college mini-project and viva demonstration. It allows users to search for movies, browse trending and popular titles, view detailed movie information, and save favorites using browser localStorage. The app uses TMDB API when a valid API key is configured, and automatically falls back to a demo mode if no key is available or the request fails.

## Problem Statement
Students often need a simple yet modern mini-project that demonstrates front-end web development, API integration, and data handling without using a backend server. A movie search app is an excellent choice because it is engaging, practical, and easy to explain during viva.

## Objectives
- Build a responsive and modern movie dashboard using HTML, CSS, and JavaScript.
- Integrate the TMDB public movie API for real movie data.
- Search movies by title and browse sections such as Discover, Popular, and Top Rated.
- Display movie details in a modal popup.
- Allow users to save favorite movies using localStorage.
- Ensure the app works in demo mode when no API key is configured.
- Keep the project beginner-friendly and easy to run on VS Code.

## Technologies Used
- HTML5
- CSS3
- Vanilla JavaScript
- TMDB REST API v3
- Browser localStorage
- VS Code Live Server or any static file server

## System Workflow
1. The app loads the default Discover section.
2. When the user enters a movie title and clicks Search, the app requests data from TMDB or demo data.
3. Movies are displayed as responsive cards with poster, title, rating, and release year.
4. Clicking a movie card opens a modal with its detailed information.
5. Users can add or remove movies to favorites and these are saved locally in the browser.
6. The app checks the saved API key and switches to demo mode automatically when needed.

## Folder Structure

Movie_Search_Application/
├── index.html
├── style.css
├── script.js
├── README.md

## API Setup Instructions
1. Visit the TMDB website: https://www.themoviedb.org/
2. Create a free account and generate an API key.
3. Open the app in the browser.
4. Click the API Key button in the top bar.
5. Paste the TMDB API key and click Save.
6. The app saves the key in localStorage for this DEMO only.

Important security note:
- Storing API keys in browser localStorage is not secure for real production apps.
- It is acceptable for a classroom demo and college project, but real applications should use a backend proxy or environment variables.
- Do not commit real API keys to public GitHub repositories.

## How to Run the Project in VS Code
1. Open the project folder in VS Code.
2. Make sure the files are inside the Movie_Search_Application folder.
3. Install the Live Server extension if it is not already installed.
4. Right-click on index.html and select Open with Live Server.
5. The app will open in the browser and run locally.

Alternative:
- Open the terminal in the project folder and start a simple local server:
  python -m http.server 8000
- Then open http://localhost:8000 in the browser.

## Main Features
- Dark premium cinema-inspired dashboard
- Responsive layout for mobile, tablet, and desktop
- Sticky navigation bar with sections
- Search movies by title
- Trending / Popular / Top Rated movie browsing
- Detailed movie modal popup
- Favorite movie watchlist using localStorage
- Demo mode with sample data if API key is missing or invalid
- Loading and empty-state messages

## Testing Steps
1. Run the app with Live Server.
2. Confirm that Discover movies appear by default.
3. Search for a movie name like "Batman" or "Dune".
4. Click a movie card to see the details modal.
5. Click the heart icon to save and remove favorites.
6. Refresh the browser and confirm favorites remain saved.
7. Click API Key and enter a valid TMDB API key to switch to live API mode.
8. Remove the key or use an invalid key to confirm demo mode fallback.

## Limitations
- Browser localStorage is not secure enough for production API key storage.
- Public API requests have rate limits and may fail if the key is invalid.
- The demo uses sample movie data when the API is unavailable.
- Some media assets may be missing, so the app uses a fallback image.

## Future Enhancements
- Add category filters by genre.
- Add pagination for larger search results.
- Add a trailer link when available.
- Add sorting by rating or release date.
- Add dark and light theme toggle.
- Improve accessibility and keyboard navigation.

## Viva Questions and Answers
### Q1: What is the purpose of this project?
A: It helps users search, discover, and save movies using the TMDB public API and a clean front-end interface.

### Q2: Why is TMDB used?
A: TMDB provides a public movie database with free API access for educational and demo projects.

### Q3: What is localStorage used for here?
A: It stores favorite movies and the API key on the user’s browser so the app remembers them after refresh.

### Q4: What happens if no API key is configured?
A: The app enters demo mode and uses safe sample movie data so the project still works.

### Q5: Why is demo mode important?
A: It allows the project to run without API credentials, which is helpful for academic demonstrations and classroom presentation.

## Conclusion
CineScope is a practical and beginner-friendly movie application that combines a clean interface, public API integration, real-world data handling, and modern UI design. It is suitable for a mini-project presentation and provides a strong understanding of front-end development concepts.
