export function movieExists(results: any[], imdbID: string): boolean {
    return results.some(movie => movie.imdbID === imdbID);
}