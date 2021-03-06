export * from './basic';

export interface CustomResponse {
  readonly status: boolean;
  readonly message: string;
  data: any;
  origin?: any;
}

export interface CommonPageList {
  page?:number;
  pagesize?: number;
}