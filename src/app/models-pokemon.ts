export interface Pokemon {
    id: number;
    name: string;
    type: string;
    heldItem: string;
    description: string;
    region: 'Kanto' | 'Johto' | 'Hoenn';
    imageUrl: string;
}

