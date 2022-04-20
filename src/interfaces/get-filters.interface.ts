export interface IMinMaxValue {
  min: number;
  max: number;
}

export interface IGetDistinctValues {
  filter: string[];
}

export interface IGetMinMaxValues {
  filter: IMinMaxValue;
}
