import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
    RootState,
    setVolume,
    setBpm,
    setLayerVolume,
    setLayerPan,
    Layer
} from '../../../redux'

import {
    uploadSample
} from '../logic'

import {
    SETTINGS,
    GLOBAL_SETTINGS,
    SLIDER,
    LAYER_SETTINGS,
    UPLOAD_SAMPLE
} from '../styled'

export const Settings = () => {

    const { volume, bpm } = useSelector((state: RootState) => state.tam.settings)
    const layers = useSelector((state: RootState) => state.tam.settings.layers as Layer[])
    const { selected } = useSelector((state: RootState) => state.tam.graphics)
    const dispatch = useDispatch()

    return (
        <SETTINGS>
            <GLOBAL_SETTINGS>
                <SLIDER layerId={-1} slider={0}>
                    <input type="range"
                        onChange={(e) => dispatch(setVolume(e.target.valueAsNumber))}
                        min={0}
                        max={100}
                        value={volume}
                    />
                </SLIDER>
                <SLIDER layerId={-1} slider={1}>
                    <input type="range"
                        onChange={e => dispatch(setBpm(e.target.valueAsNumber))}
                        min={50}
                        max={200}
                        value={bpm}
                    />
                </SLIDER>

            </GLOBAL_SETTINGS>
            {
                layers.map(layer => (
                    selected[layer.id]
                        ? <LAYER_SETTINGS>
                            <SLIDER layerId={layer.id} slider={2}>
                                <input type="range"
                                    onChange={(e) => dispatch(setLayerVolume(layer.id, e.target.valueAsNumber))}
                                    min={0}
                                    max={100}
                                    value={layer.volume}
                                />
                            </SLIDER>
                            <SLIDER layerId={layer.id} slider={3}>
                                <input type="range"
                                    onChange={e => dispatch(setLayerPan(layer.id, e.target.valueAsNumber))}
                                    min={-50}
                                    max={50}
                                    value={layer.pan}
                                />
                            </SLIDER>
                            <UPLOAD_SAMPLE layerId={layer.id}>
                                <label htmlFor='sample'>
                                    <input type="file" id='sample' onChange={e => e.target.files && uploadSample(e.target.files[0], layer.id)}/>
                                </label>
                            </UPLOAD_SAMPLE>
                        </LAYER_SETTINGS>
                        : null
                ))}
        </SETTINGS>
    )
}
