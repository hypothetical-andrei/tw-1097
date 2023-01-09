const INITIAL_STATE = {
  notes: [],
  error: null,
  fetching: false,
  fetched: false
}

export default function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_NOTES_PENDING':
    case 'DELETE_NOTE_PENDING':
    case 'ADD_NOTE_PENDING':
      return { ...state, error: null, fetching: true, fetched: false }
    case 'GET_NOTES_FULFILLED':
    case 'DELETE_NOTE_FULFILLED':
    case 'ADD_NOTE_FULFILLED':
      return { ...state, notes: action.payload, fetching: false, fetched: true }
    case 'GET_NOTES_REJECTED':
    case 'DELETE_NOTE_REJECT':
    case 'ADD_NOTE_REJECTED':
      return { ...state, error: action.payload, fetching: false, fetched: false }
    default:
      return state
  }
}
