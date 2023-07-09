import { axios } from "../../utils";

// All Products Api
export const allProducts = () => {
  return axios({
    method: "GET",
    url: "https://dummyjson.com/products",
  });
};

export const oneProducts = () => {
  return axios({
    method: "GET",
    url: "https://dummyjson.com/products/1",
  });
};

export const metaRepo = () => {
  return axios({
    method: "GET",
    url: "https://api.careers360.com/api/1/entity/meta-details/?slug=clat-eligibility-criteria&entity_type=article&domain=law",
    headers: {
      "x-api-key": "xeJJzhaj1mQ-ksTB_nF_iH0z5YdG50yQtwQCzbcHuKA",
    },
  });
};
