import { create } from "apisauce";
import { NETWORK_BASE_URL, NETWORK_TIMEOUT, NETWORK_HTTP_HEADERS } from "./networkConstants";

const netWorkApi = create({
    baseURL: NETWORK_BASE_URL,
    headers: NETWORK_HTTP_HEADERS,
    timeout: NETWORK_TIMEOUT,
});

export default netWorkApi;