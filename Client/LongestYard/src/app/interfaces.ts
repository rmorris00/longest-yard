export interface Player {
    playerId: number; // From Database
    firstName: string; // From Database
    lastName: string; // From Database
    position: string; // From Database
    picture: string; // From internal folder - also has a field in the database
    mugshot?: string; // From internal folder - also has a field in the database
    offenses?: string[]; // From API call
    av: number; // From database
    playerCost?: number; // Uses data from API to calculate based on internal logic
    careerStat1?: string;  // Hard Coded
    careerStat2?: string; // Hard Coded
    careerStat3?: string; // Hard Coded
    careerStat4?: string; // Hard Coded
    careerStat5?: string; // Hard Coded
    careerBlurb?: string; // Hard Coded
}