const API_KEY_STORAGE_KEY = 'cinemscope_tmdb_api_key';
const FAVORITES_STORAGE_KEY = 'cinemscope_favorites';

const sampleMovies = [
  {
    id: 1,
    title: 'Dune: Part Two',
    overview:
      'Paul Atreides unites with Chani and the Fremen while seeking revenge against those who betrayed his family.',
    poster_path: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80',
    backdrop_path: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=80',
    release_date: '2024-03-15',
    vote_average: 8.6,
    original_language: 'en',
    runtime: 166,
    tagline: 'A new world awaits.',
    director: 'Denis Villeneuve',
    cast: ['Timothée Chalamet', 'Zendaya', 'Rebecca Ferguson'],
    status: 'Released',
    genres: ['Sci-Fi', 'Adventure', 'Action'],
    categories: ['discover', 'popular', 'top-rated']
  },
  {
    id: 2,
    title: 'Inside Out 2',
    overview:
      'Riley faces new emotions and big changes as she enters adolescence, making her world even more complex.',
    poster_path: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80',
    backdrop_path: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1200&q=80',
    release_date: '2024-06-14',
    vote_average: 8.1,
    original_language: 'en',
    runtime: 96,
    tagline: 'Feelings are getting louder.',
    director: 'Kelsey Mann',
    cast: ['Amy Poehler', 'Maya Hawke', 'Lewis Black'],
    status: 'Released',
    genres: ['Animation', 'Family', 'Comedy'],
    categories: ['discover', 'popular']
  },
  {
    id: 3,
    title: 'Oppenheimer',
    overview:
      'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.',
    poster_path: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    backdrop_path: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    release_date: '2023-07-21',
    vote_average: 8.5,
    original_language: 'en',
    runtime: 180,
    tagline: 'The world changes forever.',
    director: 'Christopher Nolan',
    cast: ['Cillian Murphy', 'Robert Downey Jr.', 'Emily Blunt'],
    status: 'Released',
    genres: ['Drama', 'History', 'Thriller'],
    categories: ['discover', 'top-rated']
  },
  {
    id: 4,
    title: 'The Batman',
    overview:
      'As Gotham City faces a serial killer, Batman investigates corruption in the city while meeting Catwoman and Penguin.',
    poster_path: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=800&q=80',
    backdrop_path: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1200&q=80',
    release_date: '2022-03-04',
    vote_average: 7.9,
    original_language: 'en',
    runtime: 176,
    tagline: 'Justice is a dark place.',
    director: 'Matt Reeves',
    cast: ['Robert Pattinson', 'Zoë Kravitz', 'Paul Dano'],
    status: 'Released',
    genres: ['Action', 'Crime', 'Drama'],
    categories: ['popular', 'top-rated']
  },
  {
    id: 5,
    title: 'Spider-Man: Across the Spider-Verse',
    overview:
      'Miles Morales travels across the multiverse to team up with Gwen Stacy and stop a dangerous new villain.',
    poster_path: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=80',
    backdrop_path: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=1200&q=80',
    release_date: '2023-06-02',
    vote_average: 8.4,
    original_language: 'en',
    runtime: 140,
    tagline: 'The multiverse is endless.',
    director: 'Joaquim Dos Santos',
    cast: ['Shameik Moore', 'Hailee Steinfeld', 'Oscar Isaac'],
    status: 'Released',
    genres: ['Animation', 'Action', 'Adventure'],
    categories: ['discover', 'popular', 'top-rated']
  },
  {
    id: 6,
    title: 'The Dark Knight',
    overview:
      'Batman faces the Joker, a criminal mastermind whose chaos threatens Gotham and the psyche of Bruce Wayne.',
    poster_path: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=80',
    backdrop_path: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1200&q=80',
    release_date: '2008-07-18',
    vote_average: 9.0,
    original_language: 'en',
    runtime: 152,
    tagline: 'Welcome to the dark side.',
    director: 'Christopher Nolan',
    cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
    status: 'Released',
    genres: ['Action', 'Crime', 'Drama'],
    categories: ['top-rated']
  },
  {
    id: 7,
    title: 'Barbie',
    overview:
      'A doll named Barbie and Ken leave the perfect world of Barbie Land to discover the real world and challenge stereotypes.',
    poster_path: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80',
    backdrop_path: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80',
    release_date: '2023-07-21',
    vote_average: 7.7,
    original_language: 'en',
    runtime: 114,
    tagline: 'She can be anything.',
    director: 'Greta Gerwig',
    cast: ['Margot Robbie', 'Ryan Gosling', 'America Ferrera'],
    status: 'Released',
    genres: ['Comedy', 'Adventure', 'Fantasy'],
    categories: ['discover', 'popular']
  },
  {
    id: 8,
    title: 'Avatar: The Way of Water',
    overview:
      'Jake Sully and Neytiri struggle with their family while stepping into new dangers in Pandora.',
    poster_path: 'https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?auto=format&fit=crop&w=800&q=80',
    backdrop_path: 'https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?auto=format&fit=crop&w=1200&q=80',
    release_date: '2022-12-16',
    vote_average: 7.8,
    original_language: 'en',
    runtime: 192,
    tagline: 'The world is bigger than you know.',
    director: 'James Cameron',
    cast: ['Sam Worthington', 'Zoe Saldaña', 'Sigourney Weaver'],
    status: 'Released',
    genres: ['Sci-Fi', 'Adventure', 'Action'],
    categories: ['discover', 'popular']
  },
  {
    id: 9,
    title: 'Interstellar',
    overview:
      'A team of explorers travels through a wormhole in search of a new home for humanity.',
    poster_path: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=80',
    backdrop_path: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1200&q=80',
    release_date: '2014-11-07',
    vote_average: 8.7,
    original_language: 'en',
    runtime: 169,
    tagline: 'Mankind was born on Earth. It was never meant to die here.',
    director: 'Christopher Nolan',
    cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
    status: 'Released',
    genres: ['Sci-Fi', 'Drama', 'Adventure'],
    categories: ['top-rated']
  },
  {
    id: 10,
    title: 'La La Land',
    overview:
      'A jazz musician and an aspiring actress fall in love while chasing their dreams in Los Angeles.',
    poster_path: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
    backdrop_path: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    release_date: '2016-12-09',
    vote_average: 8.1,
    original_language: 'en',
    runtime: 128,
    tagline: 'City of stars, city of dreams.',
    director: 'Damien Chazelle',
    cast: ['Ryan Gosling', 'Emma Stone', 'John Legend'],
    status: 'Released',
    genres: ['Drama', 'Music', 'Romance'],
    categories: ['discover', 'top-rated']
  },
  {
    id: 11,
    title: 'The Purge: Election Year',
    overview:
      'A senator and her bodyguard face a deadly night when political violence erupts across the country.',
    poster_path: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
    backdrop_path: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
    release_date: '2016-07-01',
    vote_average: 6.4,
    original_language: 'en',
    runtime: 109,
    tagline: 'This year, the law is the target.',
    director: 'James DeMonaco',
    cast: ['Frank Grillo', 'Elizabeth Mitchell', 'Mykelti Williamson'],
    status: 'Released',
    genres: ['Thriller', 'Action', 'Horror'],
    categories: ['popular']
  },
  {
    id: 12,
    title: 'Moonlight',
    overview:
      'A young African-American man explores identity, love, and masculinity through a series of defining moments in life.',
    poster_path: 'https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=800&q=80',
    backdrop_path: 'https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=1200&q=80',
    release_date: '2016-10-21',
    vote_average: 7.4,
    original_language: 'en',
    runtime: 111,
    tagline: 'A life in three chapters.',
    director: 'Barry Jenkins',
    cast: ['Trevante Rhodes', 'Mahershala Ali', 'Naomie Harris'],
    status: 'Released',
    genres: ['Drama'],
    categories: ['discover', 'top-rated']
  },
  {
    id: 13,
    title: 'Mad Max: Fury Road',
    overview:
      'In a post-apocalyptic wasteland, a drifter joins a fierce warrior to escape a tyrant and save the world.',
    poster_path: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
    backdrop_path: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    release_date: '2015-05-15',
    vote_average: 8.1,
    original_language: 'en',
    runtime: 120,
    tagline: 'He was the one who left for the road.',
    director: 'George Miller',
    cast: ['Tom Hardy', 'Charlize Theron', 'Nicholas Hoult'],
    status: 'Released',
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    categories: ['popular', 'top-rated']
  },
  {
    id: 14,
    title: 'Parasite',
    overview:
      'A poor family infiltrates a wealthy household through deception, leading to an explosive chain of events.',
    poster_path: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
    backdrop_path: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
    release_date: '2019-05-30',
    vote_average: 8.5,
    original_language: 'ko',
    runtime: 132,
    tagline: 'The rich are not the only ones with secrets.',
    director: 'Bong Joon-ho',
    cast: ['Song Kang-ho', 'Lee Sun-kyun', 'Cho Yeo-jeong'],
    status: 'Released',
    genres: ['Thriller', 'Drama', 'Comedy'],
    categories: ['discover', 'top-rated']
  }
];

const state = {
  activeTab: 'discover',
  searchQuery: '',
  currentMovies: [],
  favorites: [],
  apiKey: '',
  demoMode: true
};

const elements = {
  navLinks: document.querySelectorAll('.nav-link'),
  apiConfigToggle: document.getElementById('apiConfigToggle'),
  apiKeyPanel: document.getElementById('apiKeyPanel'),
  apiKeyInput: document.getElementById('apiKeyInput'),
  saveApiKeyBtn: document.getElementById('saveApiKeyBtn'),
  clearApiKeyBtn: document.getElementById('clearApiKeyBtn'),
  searchInput: document.getElementById('searchInput'),
  searchButton: document.getElementById('searchButton'),
  clearSearchButton: document.getElementById('clearSearchButton'),
  statusBadge: document.getElementById('statusBadge'),
  resultInfo: document.getElementById('resultInfo'),
  heroBackdrop: document.getElementById('heroBackdrop'),
  heroTitle: document.getElementById('heroTitle'),
  heroOverview: document.getElementById('heroOverview'),
  heroRating: document.getElementById('heroRating'),
  heroRelease: document.getElementById('heroRelease'),
  heroDetailsBtn: document.getElementById('heroDetailsBtn'),
  heroFavoriteBtn: document.getElementById('heroFavoriteBtn'),
  sectionTitle: document.getElementById('sectionTitle'),
  moviesCount: document.getElementById('moviesCount'),
  movieGrid: document.getElementById('movieGrid'),
  emptyState: document.getElementById('emptyState'),
  loadingIndicator: document.getElementById('loadingIndicator'),
  favoritesCount: document.getElementById('favoritesCount'),
  movieModal: document.getElementById('movieModal'),
  modalContent: document.getElementById('modalContent'),
  closeModalBtn: document.getElementById('closeModalBtn')
};

document.addEventListener('DOMContentLoaded', () => {
  state.apiKey = localStorage.getItem(API_KEY_STORAGE_KEY) || '';
  state.favorites = loadFavorites();
  attachEvents();
  updateFavoritesCount();
  syncApiKeyField();
  loadSection('discover');
});

function attachEvents() {
  elements.navLinks.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedSection = button.dataset.section;
      handleNavSelection(selectedSection);
    });
  });

  elements.apiConfigToggle.addEventListener('click', () => {
    elements.apiKeyPanel.classList.toggle('hidden');
  });

  elements.saveApiKeyBtn.addEventListener('click', () => {
    const value = elements.apiKeyInput.value.trim();
    state.apiKey = value;
    if (value) {
      localStorage.setItem(API_KEY_STORAGE_KEY, value);
      showStatusMessage('TMDB API key saved in localStorage for this browser.');
    } else {
      localStorage.removeItem(API_KEY_STORAGE_KEY);
      showStatusMessage('No API key saved. Demo mode is active.');
    }
    loadSection(state.activeTab, state.searchQuery);
    elements.apiKeyPanel.classList.add('hidden');
  });

  elements.clearApiKeyBtn.addEventListener('click', () => {
    state.apiKey = '';
    elements.apiKeyInput.value = '';
    localStorage.removeItem(API_KEY_STORAGE_KEY);
    showStatusMessage('TMDB API key cleared. Demo mode is active.');
    loadSection(state.activeTab, state.searchQuery);
    elements.apiKeyPanel.classList.add('hidden');
  });

  elements.searchButton.addEventListener('click', handleSearch);
  elements.clearSearchButton.addEventListener('click', clearSearch);
  elements.searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  });

  elements.heroDetailsBtn.addEventListener('click', () => {
    const featuredMovie = getFeaturedMovie();
    if (featuredMovie) {
      openMovieDetails(featuredMovie.id);
    }
  });

  elements.heroFavoriteBtn.addEventListener('click', () => {
    const featuredMovie = getFeaturedMovie();
    if (featuredMovie) {
      toggleFavorite(featuredMovie);
      renderMovieGrid(state.currentMovies);
      renderHero(getFeaturedMovie());
    }
  });

  elements.closeModalBtn.addEventListener('click', closeModal);
  elements.movieModal.addEventListener('click', (event) => {
    if (event.target.dataset.close === 'true') {
      closeModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !elements.movieModal.classList.contains('hidden')) {
      closeModal();
    }
  });

  elements.movieGrid.addEventListener('click', async (event) => {
    const favoriteButton = event.target.closest('.favorite-toggle');
    if (favoriteButton) {
      event.stopPropagation();
      const movieId = Number(favoriteButton.dataset.id);
      const movie = state.currentMovies.find((item) => Number(item.id) === movieId);
      if (movie) {
        toggleFavorite(movie);
        renderMovieGrid(state.currentMovies);
        renderHero(getFeaturedMovie());
      }
      return;
    }

    const card = event.target.closest('.movie-card');
    if (card) {
      openMovieDetails(Number(card.dataset.id));
    }
  });
}

function showStatusMessage(message) {
  elements.resultInfo.textContent = message;
}

function syncApiKeyField() {
  elements.apiKeyInput.value = state.apiKey;
}

function handleNavSelection(section) {
  elements.navLinks.forEach((button) => {
    button.classList.toggle('active', button.dataset.section === section);
  });

  if (section === 'favorites') {
    renderFavorites();
    return;
  }

  clearSearch(false);
  loadSection(section, '');
}

function clearSearch(shouldReload = true) {
  state.searchQuery = '';
  elements.searchInput.value = '';
  if (shouldReload) {
    loadSection(state.activeTab === 'favorites' ? 'discover' : state.activeTab, '');
  }
}

async function handleSearch() {
  const query = elements.searchInput.value.trim();

  if (!query) {
    showStatusMessage('Please enter a movie title before searching.');
    elements.emptyState.textContent = 'Please type a movie name to search.';
    elements.emptyState.classList.remove('hidden');
    return;
  }

  state.searchQuery = query;
  state.activeTab = 'search';
  elements.navLinks.forEach((button) => {
    button.classList.toggle('active', button.dataset.section === 'discover');
  });

  elements.sectionTitle.textContent = `Search: ${query}`;
  await loadSection('search', query);
}

async function loadSection(section, customQuery = '') {
  state.activeTab = section;
  elements.navLinks.forEach((button) => {
    button.classList.toggle('active', button.dataset.section === section);
  });

  showLoading(true);

  try {
    const movies = await fetchMoviesForSection(section, customQuery || state.searchQuery);
    state.currentMovies = movies;
    renderMovieGrid(movies);
    renderHero(getFeaturedMovie());
    updateSectionTitle(section, customQuery || state.searchQuery);
    showLoading(false);
    updateFavoritesCount();
  } catch (error) {
    console.error('Error loading section:', error);
    state.currentMovies = getDemoMoviesForSection(section, customQuery || state.searchQuery);
    renderMovieGrid(state.currentMovies);
    renderHero(getFeaturedMovie());
    updateSectionTitle(section, customQuery || state.searchQuery);
    showLoading(false);
  }
}

function updateSectionTitle(section, query) {
  if (section === 'favorites') {
    elements.sectionTitle.textContent = 'My Favorites';
    elements.moviesCount.textContent = `${state.favorites.length} saved`;
    return;
  }

  if (section === 'search') {
    elements.sectionTitle.textContent = `Search: ${query}`;
    elements.moviesCount.textContent = `${state.currentMovies.length} result${state.currentMovies.length === 1 ? '' : 's'}`;
    return;
  }

  const names = {
    discover: 'Discover',
    popular: 'Popular',
    'top-rated': 'Top Rated'
  };

  elements.sectionTitle.textContent = names[section] || 'Discover';
  elements.moviesCount.textContent = `${state.currentMovies.length} result${state.currentMovies.length === 1 ? '' : 's'}`;
}

function showLoading(show) {
  elements.loadingIndicator.classList.toggle('hidden', !show);
}

function renderMovieGrid(movies) {
  if (!movies || movies.length === 0) {
    elements.movieGrid.innerHTML = '';
    elements.emptyState.textContent = state.activeTab === 'favorites'
      ? 'No favorite movies yet. Save some films to build your watchlist.'
      : 'No movies found. Try a different title or check the section again.';
    elements.emptyState.classList.remove('hidden');
    elements.moviesCount.textContent = '0 results';
    return;
  }

  elements.emptyState.classList.add('hidden');
  elements.movieGrid.innerHTML = movies
    .map((movie) => {
      const isFavorite = isInFavorites(movie.id);
      const title = safeText(movie.title, 'Unknown title');
      const rating = Number(movie.vote_average ?? 0).toFixed(1);
      const year = movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A';
      const poster = getPosterUrl(movie.poster_path);

      return `
        <article class="movie-card" data-id="${movie.id}" tabindex="0" aria-label="Open details for ${title}">
          <div class="movie-poster-wrap">
            <button
              class="favorite-toggle ${isFavorite ? 'active' : ''}"
              type="button"
              data-id="${movie.id}"
              aria-label="${isFavorite ? 'Remove from favorites' : 'Add to favorites'}"
            >
              ${isFavorite ? '♥' : '♡'}
            </button>
            <img class="movie-poster" src="${poster}" alt="${title} poster" loading="lazy" />
          </div>
          <div class="movie-info">
            <div class="movie-meta">
              <span class="movie-rating">⭐ ${rating}</span>
              <span>${year}</span>
            </div>
            <h3 class="movie-title">${title}</h3>
          </div>
        </article>
      `;
    })
    .join('');

  elements.moviesCount.textContent = `${movies.length} result${movies.length === 1 ? '' : 's'}`;
}

function renderHero(movie) {
  if (!movie) {
    return;
  }

  const heroMovie = normalizeMovie(movie);
  const poster = getPosterUrl(heroMovie.backdrop_path || heroMovie.poster_path);
  elements.heroBackdrop.style.backgroundImage = `url('${poster}')`;
  elements.heroTitle.textContent = safeText(heroMovie.title, 'Movie title');
  elements.heroOverview.textContent = truncateText(heroMovie.overview || 'No overview available for this movie yet.', 180);
  elements.heroRating.textContent = `⭐ ${Number(heroMovie.vote_average ?? 0).toFixed(1)}`;
  elements.heroRelease.textContent = heroMovie.release_date ? new Date(heroMovie.release_date).getFullYear() : 'N/A';

  const isFavorite = isInFavorites(heroMovie.id);
  elements.heroFavoriteBtn.textContent = isFavorite ? 'Saved' : 'Save Favorite';
  elements.heroFavoriteBtn.classList.toggle('btn-secondary', !isFavorite);
  elements.heroFavoriteBtn.classList.toggle('btn-outline', isFavorite);
  elements.heroDetailsBtn.dataset.movieId = heroMovie.id;
}

function getFeaturedMovie() {
  if (state.currentMovies && state.currentMovies.length > 0) {
    return state.currentMovies[0];
  }

  return sampleMovies[0];
}

async function fetchMoviesForSection(section, query = '') {
  const key = state.apiKey.trim();

  if (!key) {
    state.demoMode = true;
    updateStatusBadge(false);
    return getDemoMoviesForSection(section, query);
  }

  try {
    const movies = await fetchLiveMovies(section, query);
    state.demoMode = false;
    updateStatusBadge(true);
    return movies;
  } catch (error) {
    console.warn('Live API fetch failed, switching to demo mode:', error);
    state.demoMode = true;
    updateStatusBadge(false);
    return getDemoMoviesForSection(section, query);
  }
}

async function fetchLiveMovies(section, query = '') {
  let endpoint = 'trending/movie/week';
  const params = {};

  if (section === 'popular') {
    endpoint = 'movie/popular';
  } else if (section === 'top-rated') {
    endpoint = 'movie/top_rated';
  } else if (section === 'search') {
    endpoint = 'search/movie';
    params.query = query;
  }

  const apiUrl = buildTmdbUrl(endpoint, params);
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  const data = await response.json();
  const results = Array.isArray(data.results) ? data.results : [];

  return results.map((movie) => normalizeMovie(movie));
}

function buildTmdbUrl(endpoint, params = {}) {
  const url = new URL(`https://api.themoviedb.org/3/${endpoint}`);
  url.searchParams.set('api_key', state.apiKey.trim());

  Object.entries(params).forEach(([key, value]) => {
    if (value && value !== '') {
      url.searchParams.set(key, value);
    }
  });

  return url.toString();
}

function getDemoMoviesForSection(section, query = '') {
  let filtered = [...sampleMovies];

  if (section === 'discover') {
    filtered = sampleMovies.filter((movie) => movie.categories.includes('discover'));
  } else if (section === 'popular') {
    filtered = sampleMovies.filter((movie) => movie.categories.includes('popular'));
  } else if (section === 'top-rated') {
    filtered = sampleMovies.filter((movie) => movie.categories.includes('top-rated'));
  } else if (section === 'search') {
    filtered = sampleMovies;
  }

  const expression = query.trim().toLowerCase();
  if (expression) {
    filtered = filtered.filter((movie) =>
      movie.title.toLowerCase().includes(expression) ||
      movie.overview.toLowerCase().includes(expression)
    );
  }

  return filtered.map((movie) => normalizeMovie(movie));
}

function normalizeMovie(movie) {
  return {
    id: movie.id,
    title: movie.title || movie.name || 'Untitled',
    overview: movie.overview || 'No summary is available for this movie yet.',
    poster_path: movie.poster_path || movie.poster || '',
    backdrop_path: movie.backdrop_path || movie.backdrop || '',
    release_date: movie.release_date || movie.first_air_date || '',
    vote_average: movie.vote_average ?? 0,
    original_language: movie.original_language || 'en',
    runtime: movie.runtime || 0,
    tagline: movie.tagline || '',
    director: movie.director || 'Not available',
    cast: Array.isArray(movie.cast) ? movie.cast : [],
    status: movie.status || 'Released',
    genres: Array.isArray(movie.genres)
      ? movie.genres.map((genre) => genre.name || genre)
      : Array.isArray(movie.genre_ids)
        ? movie.genre_ids
        : Array.isArray(movie.genres_list)
          ? movie.genres_list
          : [],
    genre_names: Array.isArray(movie.genre_names)
      ? movie.genre_names
      : Array.isArray(movie.genres)
        ? movie.genres.map((genre) => genre.name || genre)
        : [],
    categories: Array.isArray(movie.categories) ? movie.categories : []
  };
}

async function openMovieDetails(movieId) {
  const movie = await getMovieDetails(movieId);
  if (!movie) {
    return;
  }

  const genres = movie.genre_names && movie.genre_names.length > 0
    ? movie.genre_names.join(', ')
    : movie.genres && movie.genres.length > 0
      ? movie.genres.join(', ')
      : 'N/A';

  const language = movie.original_language ? movie.original_language.toUpperCase() : 'N/A';
  const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A';
  const runtime = movie.runtime ? `${movie.runtime} min` : 'N/A';
  const rating = Number(movie.vote_average ?? 0).toFixed(1);
  const tagline = movie.tagline ? movie.tagline : 'No tagline available';
  const director = movie.director || 'Not available';
  const cast = Array.isArray(movie.cast) && movie.cast.length > 0 ? movie.cast.slice(0, 3).join(', ') : 'Not available';
  const status = movie.status || 'Released';

  elements.modalContent.innerHTML = `
    <img class="modal-poster" src="${getPosterUrl(movie.poster_path || movie.backdrop_path)}" alt="${safeText(movie.title, 'Movie')} poster" />
    <div class="modal-body">
      <h3 id="movieModalTitle">${safeText(movie.title, 'Movie title')}</h3>
      <div class="modal-meta">
        <span>⭐ ${rating}</span>
        <span>Release: ${releaseYear}</span>
        <span>Language: ${language}</span>
      </div>
      <p class="modal-overview"><strong>${safeText(tagline)}</strong><br><br>${safeText(movie.overview, 'No overview available for this movie.')}</p>
      <div class="modal-details">
        <div class="detail-item">
          <span class="detail-label">Runtime</span>
          <span class="detail-value">${runtime}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Genres</span>
          <span class="detail-value">${genres}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Rating</span>
          <span class="detail-value">${rating}/10</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Release</span>
          <span class="detail-value">${movie.release_date || 'N/A'}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Director</span>
          <span class="detail-value">${director}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Cast</span>
          <span class="detail-value">${cast}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Status</span>
          <span class="detail-value">${status}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Original Language</span>
          <span class="detail-value">${language}</span>
        </div>
      </div>
    </div>
  `;

  elements.movieModal.classList.remove('hidden');
  elements.movieModal.setAttribute('aria-hidden', 'false');
}

async function getMovieDetails(movieId) {
  const key = state.apiKey.trim();

  if (!key) {
    const match = sampleMovies.find((movie) => Number(movie.id) === Number(movieId));
    return match ? normalizeMovie(match) : null;
  }

  try {
    const response = await fetch(buildTmdbUrl(`movie/${movieId}`));
    if (!response.ok) {
      throw new Error('Movie detail request failed');
    }

    const data = await response.json();
    return normalizeMovie(data);
  } catch (error) {
    console.warn('The live movie detail request failed. Falling back to demo data.', error);
    const match = sampleMovies.find((movie) => Number(movie.id) === Number(movieId));
    return match ? normalizeMovie(match) : null;
  }
}

function closeModal() {
  elements.movieModal.classList.add('hidden');
  elements.movieModal.setAttribute('aria-hidden', 'true');
}

function loadFavorites() {
  try {
    const stored = localStorage.getItem(FAVORITES_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.warn('Could not read favorites from localStorage.', error);
    return [];
  }
}

function updateFavoritesCount() {
  const count = state.favorites.length;
  elements.favoritesCount.textContent = count;
}

function isInFavorites(movieId) {
  return state.favorites.some((movie) => Number(movie.id) === Number(movieId));
}

function toggleFavorite(movie) {
  const normalizedMovie = normalizeMovie(movie);
  const existingIndex = state.favorites.findIndex((item) => Number(item.id) === Number(normalizedMovie.id));

  if (existingIndex >= 0) {
    state.favorites.splice(existingIndex, 1);
  } else {
    state.favorites.push(normalizedMovie);
  }

  localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(state.favorites));
  updateFavoritesCount();
  showStatusMessage(existingIndex >= 0 ? 'Movie removed from favorites.' : 'Movie added to favorites.');
}

function renderFavorites() {
  state.activeTab = 'favorites';
  elements.navLinks.forEach((button) => {
    button.classList.toggle('active', button.dataset.section === 'favorites');
  });

  showLoading(false);
  const favorites = [...state.favorites];
  state.currentMovies = favorites;
  renderMovieGrid(favorites);
  updateSectionTitle('favorites');
  renderHero(favorites[0] || sampleMovies[0]);
}

function updateStatusBadge(isLive) {
  elements.statusBadge.textContent = isLive ? 'Live API' : 'Demo Mode';
  elements.statusBadge.classList.toggle('live', isLive);
  elements.statusBadge.classList.toggle('demo', !isLive);
}

function getPosterUrl(path) {
  if (!path) {
    return 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80';
  }

  if (path.startsWith('http')) {
    return path;
  }

  return `https://image.tmdb.org/t/p/w500${path}`;
}

function truncateText(text, limit) {
  if (!text) {
    return 'No overview available.';
  }

  return text.length > limit ? `${text.slice(0, limit).trim()}...` : text;
}

function safeText(value, fallback = 'N/A') {
  if (value === null || value === undefined || value === '') {
    return fallback;
  }

  return String(value);
}

window.addEventListener('load', () => {
  updateStatusBadge(!state.apiKey || state.demoMode);
});
