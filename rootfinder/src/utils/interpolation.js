export const lagrangeInterpolation = (points) => {
    const n = points.length;

    return (x) => {
        return points.reduce((sum, [xi, yi], i) => {
            const li = points
                .filter((_, j) => j !== i)
                .reduce((prod, [xj]) => prod * (x - xj) / (xi - xj), 1);
            return sum + yi * li;
        }, 0);
    };
};
