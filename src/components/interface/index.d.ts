export interface TitleProps {
  title: string;
  centered?: boolean;
  hideDivider?: boolean;
}

export interface PeopleListProps {
  people: string[];
}

export interface OfficesListProps {
  data: {
    [key: string]: string[];
  };
  view: number;
}

export interface PersonItemProps {
  person: string;
}

export interface Vote {
  king: string;
  queen: string;
  shouldCount: boolean;
}

export interface NumberOfVotesProps {
  data: Vote[];
}

export interface GraphProps {
  data: Vote[];
}

export interface WinnerProps {
  title: string;
  winner: string;
}

export interface TieProps {
  list: string[];
  type: 'king' | 'queen';
  canHandleTie: boolean;
}

export interface TimerProps {
  textAlign: 'left' | 'center' | 'right';
}
