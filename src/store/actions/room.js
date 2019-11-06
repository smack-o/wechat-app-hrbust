import { UPDATE_ROOMS } from '../types/room'
import { createAction } from 'redux-actions'

export const updateRooms = createAction(UPDATE_ROOMS, data => data)
