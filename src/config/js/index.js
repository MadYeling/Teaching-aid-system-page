import {postRequest, getRequest} from "./axios";
import {baseUrl, baseUrl_New} from "./urlconfig";

export const postDemo = (data) => {
    return postRequest(`${baseUrl}/xxxx`, data)
};

export const getDemo = (data) => {
    return getRequest(`${baseUrl_New}/xxxx`, data)
};
