import { combineReducers } from 'redux'
import tamReducer from './theAudioMachine'

export default combineReducers({
    tam: tamReducer
})