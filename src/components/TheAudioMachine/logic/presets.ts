import store, {
    setPresetList,
    setSelectedPresetName,
    Settings,
    setSettings
} from '../../../redux'

const userTag = 'user'

export const initPresets = () => {
    if (localStorage.getItem('presets') === null) {
        localStorage.setItem('presets', JSON.stringify(store.getState().tam.presets.presetList))
    }
    store.dispatch(setPresetList(JSON.parse(localStorage.getItem('presets') as string)))
    loadPreset('Init', 'factory')
}

const loadPreset = async (name: string, category: string) => {
    let preset: Settings
    if (category === userTag) {
        preset = JSON.parse(localStorage.getItem(name) as string);
    } else {
        const response = await fetch('Presets/' + name + '.json')
        preset = await response.json();
    }
    store.dispatch(setSelectedPresetName(name))
    preset.volume = 80
    store.dispatch(setSettings(preset))
}

export const savePreset = (name: string) => {
    const settings = store.getState().tam.settings
    let presetList = store.getState().tam.presets.presetList as string[][];
    presetList = presetList.map(category => {
        if (category[0] === userTag) {
            category.push(name);
        }
        return category;
    }
    )
    localStorage.setItem('presets', JSON.stringify(presetList))
    localStorage.setItem(name, JSON.stringify({ bpm: settings.bpm, layers: settings.layers }))

    store.dispatch(setPresetList(presetList))
}

export const loadPrevPreset = () => {
    const presetList = store.getState().tam.presets.presetList
    let prevPresetName
    let prevPresetCategory

    OUTER_LOOP:
    for (let i = 0; i < presetList.length; i++) {
        for (let j = 0; j < presetList[i].length; j++) {
            if (presetList[i][j] === store.getState().tam.presets.selectedPresetName) {
                j--
                if (j > 0) {
                    prevPresetName = presetList[i][j]
                    prevPresetCategory = presetList[i][0]
                    break OUTER_LOOP
                } else {
                    let counter = presetList.length
                    while (counter > 0) {
                        i--
                        if (i < 0) {
                            i = presetList.length - 1
                        }
                        j = presetList[i].length - 1
                        if (j > 0) {
                            prevPresetName = presetList[i][j]
                            prevPresetCategory = presetList[i][0]
                            break OUTER_LOOP
                        }
                        counter--
                    }
                    prevPresetName = store.getState().tam.presets.selectedPresetName
                    prevPresetCategory = presetList[i][0]
                    break OUTER_LOOP
                }
            }
        }
    }
    loadPreset(prevPresetName, prevPresetCategory)
}

export const loadNextPreset = () => {
    const presetList = store.getState().tam.presets.presetList
    let nextPresetName
    let nextPresetCategory

    OUTER_LOOP:
    for (let i = 0; i < presetList.length; i++) {
        for (let j = 0; j < presetList[i].length; j++) {
            if (presetList[i][j] === store.getState().tam.presets.selectedPresetName) {
                j++
                if (j < presetList[i].length) {
                    nextPresetName = presetList[i][j]
                    nextPresetCategory = presetList[i][0]
                    break OUTER_LOOP
                } else {
                    let counter = 0
                    while (counter < presetList.length) {
                        i++
                        if (i >= presetList.length) {
                            i = 0
                        }
                        j = 1
                        if (j < presetList[i].length) {
                            nextPresetName = presetList[i][j]
                            nextPresetCategory = presetList[i][0]
                            break OUTER_LOOP
                        }
                        counter++
                    }
                    nextPresetName = store.getState().tam.presets.selectedPresetName
                    nextPresetCategory = presetList[i][0]
                    break OUTER_LOOP
                }
            }
        }
    }
    loadPreset(nextPresetName, nextPresetCategory)
}