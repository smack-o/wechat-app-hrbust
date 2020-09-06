export const START_LOADING = 'global/START_LOADING'
export const STOP_LOADING = 'global/STOP_LOADING'

export const startLoading = () => ({
  type: START_LOADING
})


export const stopLoading = () => ({
  type: STOP_LOADING
})
