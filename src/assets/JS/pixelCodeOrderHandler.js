const regExIndexes = (data, regEx) => {
    let count = 0;
    // let regEx = /(?<=\-\w+\s*)\{/g;

    while (regEx.exec(data)) {
        count++;
    }

    let indexes = [];
    while (count > 0) {
        indexes.push(regEx.exec(data).index);
        count--;
    }
    regEx.exec(data);

    return indexes;
}

const getIndex = (s, i) => {
    if (s[i] != '{')
        return -1
    d = [];

    for (k = i; k < s.length; k++) {
        if (s[k] == '}')
            d.pop()
        else if (s[k] == '{')
            d.push(s[i]);

        if (d.length == 0)
            return k;
    }
    return -1
}

const getIndexes = (s, indexes) => {
    result = [];
    for (i = 0; i < indexes.length; i++) {
        result.push(getIndex(s, indexes[i]));
    }
    return result;
}

const replaceAt = (s, index, replaceWith) => {
    s = s.substring(0, index) + replaceWith + s.substring(index + 1);
    return s;
}

const replaceAllAt = (s, indexes, replaceWith) => {
    for (i = 0; i < indexes.length; i++) {
        index = i * (replaceWith.length - 1) + indexes[i];
        s = s.substring(0, index) + replaceWith + s.substring(index + 1);
    }
    return s;
}

const getFinalResult = (data, regEx, replaceWith) => {
    indexes = regExIndexes(data, regEx);
    outIndexes = getIndexes(data, indexes);
    outIndexes.sort(function (a, b) { return a - b });
    result = replaceAllAt(data, outIndexes, replaceWith);
    return result;
}

