export interface Player {
    name: string; // From Database
    postion: string; // From Database
    picture: string; // From internal folder - also has a field in the database
    mugshot?: string; // From internal folder - also has a field in the database
    offenses: string[]; // From API call
    av: number; // From database
    badScore: number; // Uses data from API to calculate based on internal logic
}