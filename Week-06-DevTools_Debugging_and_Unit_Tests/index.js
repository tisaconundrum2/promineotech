function doSomething(x, y) {
    if (typeof x != 'string') {
        throw new Error('x must be a string');
    }
    return x + y;
}