import {
  SHOW_LOADING_SPINNER,
  CLEAR_MOVIES,
  SEARCH_MOVIES,
  GET_POPULAR_MOVIES,
  LOAD_MORE_MOVIES
} from '../actions'; // import the action type

const defaultState = { // set up the state, and they have global scope, which means they can be approached through the entire app
    movies: [],
    heroImage: null,
    loading: false,
    currentPage: 0,
    totalPages: 0,
    searchTerm: ''
};

export default function(state = defaultState, action) { // reducer take both state and action as parameters
  switch(action.type) {
    case GET_POPULAR_MOVIES:
      return {
        ...state, 
        movies: action.payload.results,
        heroImage: state.heroImage || action.payload.results[0],
        loading: false,
        currentPage: action.payload.page,
        totalPages: action.payload.total_pages,
        searchTerm: ""
      }
    case LOAD_MORE_MOVIES: 
      return {
        ...state,
        movies: [...state.movies, ...action.payload.results],
        loading: false,
        currentPage: action.payload.page,
        totalPages: action.payload.total_pages
      }
    case SEARCH_MOVIES:
      return {
        ...state,
        movies: action.payload.results,
        loading: false,
        currentPage: action.payload.page,
        totalPages: action.payload.total_pages,
        searchTerm: action.payload.searchTerm
      }
    case CLEAR_MOVIES:
      return {
        ...state,
        movies: []
      }
    case SHOW_LOADING_SPINNER:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}