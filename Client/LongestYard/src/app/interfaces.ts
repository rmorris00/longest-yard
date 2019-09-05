export interface Player {
    firstName: string; // From Database
    lastName: string; // From Database
    postion: string; // From Database
    picture: string; // From internal folder - also has a field in the database
    mugshot?: string; // From internal folder - also has a field in the database
    offenses?: string[]; // From API call
    av: number; // From database
    badScore: number; // Uses data from API to calculate based on internal logic
    careerStat1: string;  // Hard Coded
    careerStat2: string; // Hard Coded
    careerStat3: string; // Hard Coded
    careerStat4?: string; // Hard Coded
    careerStat5?: string; // Hard Coded
    careerBlurb: string; // Hard Coded
}