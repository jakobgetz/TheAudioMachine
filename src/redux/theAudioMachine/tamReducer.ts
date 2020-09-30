import { combineReducers } from 'redux'

import settings from './settings/settingsReducer'
import graphics from './graphics/graphicsReducer'
import presets from './presets/presetsReducer'

export default combineReducers({
    settings: settings,
    graphics: graphics,
    presets: presets
})