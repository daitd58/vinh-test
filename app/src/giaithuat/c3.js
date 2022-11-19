function flatDepth(a, d) {
    return (
        a.flat(d)
    );
}

const arr2 = [1, 2, [3, 4, [5, 6]]];
flatDepth(arr2, 1);

const arr3 = [1, 2, [3, 4, [5, 6]]];
flatDepth(arr3, 2);