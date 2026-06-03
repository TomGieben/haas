export interface PropertyProps {
  id: string;
  address: string;
  district: string;
  type: string;
  area: number;
  rent: number;
  availableFrom: string;
  coords: [number, number];
  tags: string[];
}

export class Property {
  readonly id: string;
  readonly address: string;
  readonly district: string;
  readonly type: string;
  readonly area: number;
  readonly rent: number;
  readonly availableFrom: string;
  readonly coords: [number, number];
  readonly tags: string[];

  constructor(props: PropertyProps) {
    this.id = props.id;
    this.address = props.address;
    this.district = props.district;
    this.type = props.type;
    this.area = props.area;
    this.rent = props.rent;
    this.availableFrom = props.availableFrom;
    this.coords = props.coords;
    this.tags = props.tags;
  }

  get rentLabel(): string {
    return `€${this.rent.toLocaleString('nl-NL')} / maand`;
  }

  get areaLabel(): string {
    return `${this.area} m²`;
  }
}
