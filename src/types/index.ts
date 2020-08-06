import { RootReducerMapKey, reducerMap } from '@/redux/reducers'

export type RootState = { [P in RootReducerMapKey]: ReturnType<typeof reducerMap[P]> }

export type IRootState = Readonly<RootState>