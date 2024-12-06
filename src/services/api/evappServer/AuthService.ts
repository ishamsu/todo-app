import {AxiosInstance} from "axios";

import {APIResponse} from "@customTypes/NetworkTypes";

import NetworkUtil from "@utils/NetworkUtil";

import {apiEndpoints} from "./axiosConfig/AxiosServiceConstants";

function AuthService(apiServer: AxiosInstance) {
	/**
	 * API Service method for authenticating using username & password.
	 *
	 * @param email
	 * @param password
	 * @returns Promise<APIResponse | null>
	 */
	const authenticate = async (
		email: string,
		password: string,
	): Promise<APIResponse | null> => {
		let result = null;

		await apiServer
			.post(apiEndpoints.auth.authenticate, {
				email,
				password,
			})
			.then(
				// onFullFilled
				(value) => {
					result = NetworkUtil.buildResult(
						null,
						value.status,
						null,
						value.data,
					);
				},

				// onRejected
				(reason) => {
					const {response} = reason;
					const {status, data} = response;

					result = NetworkUtil.buildResult(data, status, data, null);
				},
			)
			.catch((error) => {
				throw error;
			});

		return result;
	};

	return {
		authenticate,
	};
}

export default AuthService;
