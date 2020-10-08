// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = []

    if (matrix === undefined || matrix.length === 0) {
        return result
    }

    for (let index = 0; index < matrix.length; index++) {
        let arrayToConcat = matrix[index]

        if (index % 2 != 0) {
            arrayToConcat = matrix[index].reverse()
        }

        result = result.concat(arrayToConcat)
    }

    return result
}
