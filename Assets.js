function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function range(array) {
    minValue = Infinity;
    maxValue = -Infinity;
    for (item of array) {
        // Find minimum value
        if (item < minValue)
            minValue = item;
                
        // Find maximum value
        if (item > maxValue)
            maxValue = item;
    return maxValue - minValue;
}
}