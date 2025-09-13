export function ranking(results: any[] = []){

    const sortedItems = [...results].sort((a, b) => b.score - a.score);

    return sortedItems.map((item, index) => ({
    ...item,
    rank: index + 1,
    }));
}