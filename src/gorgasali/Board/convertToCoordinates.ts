export function convertToCoordinates(index: number) {
    const x = index % 30;
    const y = (index - x) / 30;
    return { x, y };
}
