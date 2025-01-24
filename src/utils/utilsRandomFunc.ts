export const getRandomInt = (min: number, max: number): number => {
    if (min >= max) {
        throw new Error('Minimum value must be less than maximum value')
    }
    return Math.floor(Math.random() * (max - min)) + min
}

export const getRandomNumber = (min: number, max: number): number => {
    if (min > max) {
        throw new Error('Minimum value cannot be greater than maximum value')
    }
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export const getRandomPhrase = (array: string[]): string => {
    if (!Array.isArray(array) || array.length === 0) {
        throw new Error('Input must be a non-empty array')
    }
    const randomIndex = getRandomInt(0, array.length)
    return array[randomIndex]
}