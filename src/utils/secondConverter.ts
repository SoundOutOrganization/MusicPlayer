
type ConvertedTime = {
    hours: number,
    minutes: number,
    seconds: number
}

export const secondToTimeConverter = (seconds: number): ConvertedTime => {
    return {
        hours: Math.floor(seconds / 3600),
        minutes: Math.floor(seconds % 3600 / 60),
        seconds: Math.floor(seconds % 3600 % 60)
    }
}

export const convertedTimeToString = (convertedTime: ConvertedTime): string => {
    return (
        (convertedTime.hours > 0 ? convertedTime.hours + ':' : "") +
        ((convertedTime.hours > 0 && convertedTime.minutes < 10) ? "0" : "") +
        (convertedTime.minutes > 0 ? convertedTime.minutes + ':' : convertedTime.minutes === 0 ? "00:" : "") +
        (convertedTime.seconds > 0 ? convertedTime.seconds >= 10 ? convertedTime.seconds : '0' + convertedTime.seconds : "00")
    )
}

const secondConverter = (seconds: number): string => convertedTimeToString(secondToTimeConverter(seconds))

export default secondConverter