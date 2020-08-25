export const SET_CURRENT_TERM = 'course/SET_CURRENT_TERM'

export const setCurrentTerm = (term: number) => ({
  type: SET_CURRENT_TERM,
  data: term
})
