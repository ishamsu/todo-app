import {apiServer, injectStore} from "./axiosConfig";
import AuthService from "./AuthService";

const authService = AuthService(apiServer);

export {injectStore, authService};
