import {AxiosRequestConfig} from "axios";

const API_SERVER_BASE_URL_DEV = "";

/**
 * The base url of the api server's endpoint needs to be configured here.
 *
 * NOTE: This has to be manged by a build flavour configuration files
 * such as environment fils via libraries like react-native-config or via
 * a remote configuration manger.
 */
const API_SERVER_BASE_URL = API_SERVER_BASE_URL_DEV;

/**
 * The request timeout of the api server needs to be configured here.
 *
 * NOTE: This has to be manged by a build flavour configuration files
 * such as environment fils via libraries like react-native-config or via
 * a remote configuration manger.
 */
const API_SERVER_REQUEST_TIMEOUT = 10000;

/**
 * All basic axios request-configurations needs to be set here.
 * This will used inside the services/api/index.ts file while
 * creating axios service instance to handle api calls.
 */
export const axiosRequestConfig: AxiosRequestConfig =
	Object.freeze<AxiosRequestConfig>({
		baseURL: API_SERVER_BASE_URL,
		timeout: API_SERVER_REQUEST_TIMEOUT,
	});

/**
 * All the application service api endpoints should be defined here and never
 * directly define and use apiEndpoints as the baseURL is configured based on
 * the build flavour or other remote configuration managers.
 *
 * While defining endpoints here, kindly note that the part after the base url
 * should be added here and shouldn't include the host/baseURL part.
 *
 * Kindly refer the below examples for more details:
 *
 * If the endpoint is "https://dev.exampleapiserver.tld/api/v1/login" , then it
 * should be split as below:
 * API_SERVER_BASE_URL =  "https://dev.exampleapiserver.tld/api/v1"
 * apiEndpoints = {
 *     authentication: {
 *         login: "/login"
 *     }
 * }
 *
 */
export const apiEndpoints = Object.freeze({
	auth: {
		authenticate: "",
	},
});
