import { MockMethod } from "vite-plugin-mock";
export default [
  {
    url: "/mock/api/getList",
    method: "post",
    response: () => {
      return {};
    },
  },
  {
    url: "/mock/api/getStatusList",
    method: "get",
    response: () => {
      return {};
    },
  },
] as MockMethod[];
