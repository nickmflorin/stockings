export type NumPagesPagination = {
  readonly pageSize?: never;
  readonly numPages: number;
  readonly count?: never;
  readonly page: number;
};

export type CountPagesPagination = {
  readonly pageSize: number;
  readonly numPages?: never;
  readonly count: number;
  readonly page: number;
};

export type PaginationParams = NumPagesPagination | CountPagesPagination;

export type PaginationChangeParams<P extends PaginationParams> = P extends NumPagesPagination
  ? { page: number }
  : { page: number; pageSize: number };

export type OnPaginationChange<P extends PaginationParams> = (
  params: PaginationChangeParams<P>,
) => void;
