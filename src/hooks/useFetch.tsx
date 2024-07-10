import { useEffect, useState } from "react";
import {
  HTTP_METHODS,
  defaultFetchOption,
} from "../utils/helpers/staticVariables";
import axios, { AxiosError, AxiosResponse } from "axios";
import { IFetchOptions, ResponseModel, IRefetchProps } from "../types/types";

const useFetch = <T, D>(
  url: string,
  method: HTTP_METHODS = HTTP_METHODS.GET,
  reqData?: T,
  options: IFetchOptions = defaultFetchOption
): {
  res: AxiosResponse<ResponseModel<D>> | null;
  error: string;
  fetchData: (params?: IRefetchProps<T>) => void;
} => {
  const [res, setRes] = useState<AxiosResponse<ResponseModel<D>> | null>(null);
  const [error, setError] = useState<string>("");

  const fetchData = async (params: IRefetchProps<T> = {}) => {
    const { fetchUrl, fetchMethod, fetchReqData, fetchOptions } = params;

    setError("");

    const finalUrl = fetchUrl || url;
    const finalMethod = fetchMethod || method;
    const finalReqData = fetchReqData || reqData;
    const finalOptions = fetchOptions || options;

    try {
      let res: AxiosResponse<ResponseModel<D>>;
      switch (finalMethod) {
        case HTTP_METHODS.GET:
          res = await axios.get(url);
          break;
        case HTTP_METHODS.POST:
          res = await axios.post(finalUrl, finalReqData, finalOptions);
          break;
        case HTTP_METHODS.PUT:
          res = await axios.put(finalUrl, finalReqData, finalOptions);
          break;
        case HTTP_METHODS.PATCH:
          res = await axios.patch(finalUrl, finalReqData, finalOptions);
          break;
        case HTTP_METHODS.DELETE:
          res = await axios.delete(finalUrl);
          break;
        default:
          throw new Error("Unsupported method: " + finalMethod);
      }

      setRes(res);
    } catch (err) {
      const axiosError = err as AxiosError;
      setError(axiosError.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url, method]);

  return { res, error, fetchData };
};

export default useFetch;
