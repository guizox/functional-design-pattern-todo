import React from "react";

export interface IInfinityScrollWrapper {
  isLoading: boolean;
  loadingComponent: React.ReactNode;
  fetchMore: () => void;
  length: number;
  hasMore: boolean;
  children: React.ReactNode;
  className: string;
}
