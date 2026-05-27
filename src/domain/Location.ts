export interface LocationProps {
  id: string;
  name: string;
  coords: [number, number];
  availableHomes: number;
}

export class Location {
  readonly id: string;
  readonly name: string;
  readonly coords: [number, number];
  readonly availableHomes: number;

  constructor(props: LocationProps) {
    this.id = props.id;
    this.name = props.name;
    this.coords = props.coords;
    this.availableHomes = props.availableHomes;
  }

  get label(): string {
    return `${this.name} · ${this.availableHomes}`;
  }

  get homesLabel(): string {
    return `${this.availableHomes} woningen`;
  }
}
