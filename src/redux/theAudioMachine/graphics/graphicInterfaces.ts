import Theme from '../../../themes'

export interface Graphics {
    selected: boolean[]
    isPlaying: boolean
    playHeadPosition: number
    about: boolean
    preset: boolean
    theme: Theme
}