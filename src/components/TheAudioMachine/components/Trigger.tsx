import React, {useRef} from 'react'
import {useDispatch} from 'react-redux'

import {setTrigger} from '../../../redux'

import {TRIGGER} from '../styled'

// import gsap from 'gsap'

interface Props {
    layerId: number
    triggerId: number
    velocity: number
}

export const Trigger: React.FC<Props> = props => {

    const {layerId, triggerId, velocity} = props
    const dispatch = useDispatch()
    let note = useRef(null)

    // useEffect(() => {
    //     timeline = gsap.timeline()
    // }, [])

    // useEffect(() => {
    //     if (isPlaying && (velocity !== 0) && ((playHeadPosition)=== triggerId)) {
    //         timeline.to(note.current, { duration: 0.1, width: '4vw', height: '4vw' })
    //         timeline.set(note.current, {  clearProps: 'all' })
    //     }
    // }, [playHeadPosition])

    return (
        <TRIGGER layerId={layerId} triggerId={triggerId} velocity={velocity}>
            <div onClick={() => dispatch(setTrigger(layerId, triggerId))} ref={note}/>
        </TRIGGER>
    )
}
