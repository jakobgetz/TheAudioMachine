import store, { setSettings, Layer } from '../../../redux'

export const resetTriggers = () => {
    let layers = store.getState().tam.settings.layers as Layer[]
    layers = layers.map(layer => {
        let rhythm = layer.rhythm
        layer.rhythm = rhythm.map(trigger => {
            if (trigger.velocity !== 0) {
                return { id: trigger.id, velocity: 0, pitch: trigger.pitch }
            } else {
                return trigger
            }
        })
        return layer
    }
    )
    store.dispatch(setSettings({
        bpm: store.getState().tam.settings.bpm,
        volume: store.getState().tam.settings.volume,
        layers
    }))
}