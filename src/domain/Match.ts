export interface MatchProps {
  id: string;
  name: string;
  age: number;
  profession: string;
  headline: string;
  matchPercent: number;
  tags: string[];
  interests: string[];
  flags?: { children?: boolean; pets?: boolean; wfh?: boolean };
}

export class Match {
  readonly id: string;
  readonly name: string;
  readonly age: number;
  readonly profession: string;
  readonly headline: string;
  readonly matchPercent: number;
  readonly tags: string[];
  readonly interests: string[];
  readonly flags: { children: boolean; pets: boolean; wfh: boolean };

  constructor(props: MatchProps) {
    this.id = props.id;
    this.name = props.name;
    this.age = props.age;
    this.profession = props.profession;
    this.headline = props.headline;
    this.matchPercent = props.matchPercent;
    this.tags = props.tags;
    this.interests = props.interests;
    this.flags = {
      children: props.flags?.children ?? false,
      pets: props.flags?.pets ?? false,
      wfh: props.flags?.wfh ?? false,
    };
  }

  get initial(): string {
    return this.name.charAt(0).toUpperCase();
  }

  get nameWithAge(): string {
    return `${this.name}, ${this.age}`;
  }

  get matchLabel(): string {
    return `${this.matchPercent}% match`;
  }
}
