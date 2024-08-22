export interface Concert {
    id: number;
    name: string;
    artist: string;
    venue: string;
    date: Date;
    ticketsSold: number;
    capacity: number;
    notes: string;
}