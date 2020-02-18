export default function portuguese(state = '', action) {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return action.language;
    default:
      return state;
  }
}
