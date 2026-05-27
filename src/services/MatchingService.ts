import type { Match } from '../domain/Match';
import type { User } from '../domain/User';

export class MatchingService {
  static rankMatches(_user: User, candidates: Match[]): Match[] {
    return [...candidates].sort((a, b) => b.matchPercent - a.matchPercent);
  }
}
