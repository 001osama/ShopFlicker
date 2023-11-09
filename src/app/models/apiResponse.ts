export interface APIResponse<T> {
    statusCode: number;
    errorMessage: string[];
    isSuccess: boolean;
    result: T;
  }