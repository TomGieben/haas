import { Match, type MatchProps } from './Match';

export interface HousemateProps extends MatchProps {
  bio: string;
  seeking: string;
}

export class Housemate extends Match {
  readonly bio: string;
  readonly seeking: string;

  constructor(props: HousemateProps) {
    super(props);
    this.bio = props.bio;
    this.seeking = props.seeking;
  }
}
