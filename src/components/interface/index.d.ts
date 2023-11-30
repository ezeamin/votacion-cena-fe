export interface TitleProps {
  title: string;
  centered?: boolean;
}

export interface PeopleListProps {
  people: string[];
}

export interface OfficesListProps {
  data: {
    [key: string]: string[];
  };
  message: string;
  view: number;
}

export interface PersonItemProps {
  person: string;
}
