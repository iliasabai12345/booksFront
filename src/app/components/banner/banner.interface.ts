import {IResponse} from "shared/interfaces/response,interface";

export interface IBannerResponse extends IResponse {
  readonly data: IBanner[];
}

export interface IBanner {
  readonly _id: string;
  readonly title: string;
  readonly image: string;
  readonly isActive: boolean;
}
