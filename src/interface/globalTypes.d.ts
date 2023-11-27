import { Control } from 'react-hook-form';

import { FormSchemas } from '@/constants/forms';

export interface AnyProp {
  [key: string]: unknown;
}

export interface BasicList {
  id: string | number | null;
  description: string;
}

export interface DataTestId {
  dti: string | undefined;
}

// ----------------------------------------------
// Response
// ----------------------------------------------

export interface Response<T> {
  success: boolean;
  message: string;
  data: T;
}

// ----------------------------------------------
// Pagination
// ----------------------------------------------

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  numberOfElementsOnScreen: number;
  totalElements: number;
}

// ----------------------------------------------
// Form Handling
// ----------------------------------------------

export interface FormHandling<T extends FormSchemas> {
  control: Control<T>;
  name: keyof T;
}
