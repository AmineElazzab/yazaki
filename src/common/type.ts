export type DeleteActionType = {
  isOpen: boolean;
  items: string[];
  confirmationText?: string;
};

export type SearchFilterType = {
  keyword?: string;
};

export type PaginateFilterType = {
  skip: number;
  filterBy?: string;
} & SearchFilterType;
