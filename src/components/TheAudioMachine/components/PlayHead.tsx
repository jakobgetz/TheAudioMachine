import React, { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import gsap from 'gsap'

import {
    RootState
} from '../../../redux'

import { PLAY_HEAD } from '../styled'

let timeline: TimelineLite
let speedAdjust = 0

export const PlayHead = () => {

    const { bpm } = useSelector((state: RootState) => state.tam.settings)
    const { isPlaying, playHeadPosition } = useSelector((state: RootState) => state.tam.graphics)

    let playHead = useRef(null)

    useEffect(() => {
        timeline = gsap.timeline({ paused: true, repeat: -1 })
        timeline
            .to(playHead.current, { duration: 2, rotation: 360, ease: 'none', repeat: -1 })
    }, [])

    useEffect(() => {
        if (isPlaying) {
            timeline.resume()
            speedAdjust = 0
            if ((playHeadPosition !== 0) && (playHeadPosition < 12) && (playHeadPosition > 3)) {
                if (gsap.getProperty(playHead.current, 'rotation') < (360 / 16 * (playHeadPosition - 1))) {
                    speedAdjust += (360 / 16 * (playHeadPosition - 1) - (gsap.getProperty(playHead.current, 'rotation') as number)) / 100
                } else if (gsap.getProperty(playHead.current, 'rotation') > (360 / 16 * (playHeadPosition - 1))) {
                    speedAdjust -= ((gsap.getProperty(playHead.current, 'rotation') as number) - (360 / 16 * (playHeadPosition - 1))) / 100
                }
            }
            timeline.timeScale(speedAdjust + bpm / 120)
        } else {
            timeline.restart()
            timeline.pause()
        }
    }, [playHeadPosition, isPlaying])

    useEffect(() => {
        timeline.timeScale(speedAdjust + bpm / 120)
        gsap.set(playHead.current, { rotation: 22.5 * playHeadPosition })
    }, [bpm])

    return <PLAY_HEAD bpm={bpm} isPlaying={isPlaying} ref={playHead} />
}
