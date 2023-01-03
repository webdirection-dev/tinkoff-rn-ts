export const getRandomCardNumber = () => {
    let out = ''

    for (let i = 0; i < 4; i++) {
        const random = Math.round(1000 + Math.random() * 9000)
        if (i !== 0) out += ' '
        out += random
    }

    return out
}
