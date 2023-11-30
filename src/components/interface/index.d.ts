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
