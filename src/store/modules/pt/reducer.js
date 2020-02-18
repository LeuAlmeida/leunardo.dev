export default function portuguese(state = [], action) {
  switch (action.type) {
    case 'SET_LANGUAGE_AS_PORTUGUESE': // Reducer sendo chamado apenas caso seja o ADD_TO_CART
      return [...state, action.language]; // Retornando o estado inicial + o produto chamado naquela action
    default:
      return state; // Reducer ignorando outras actions que não sejam pertinentes
  }
}
