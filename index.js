module.exports = function js2json(jsObject) {
    if (typeof jsObject !== "object") {
        throw new TypeError("must pass in object")
    }
    const myJSON = JSON.stringify(jsObject);
    return myJSON;
}


