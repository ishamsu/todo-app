/**
 * @description
 * Environment variables used in the application
 */
const env = {
	// Port on which the react app will run
	PORT: process.env.PORT,

	// Base URL for the EVAPP API SERVER config
	NEXT_PUBLIC_EVAPP_SERVER_BASE_URL:
		process.env.NEXT_PUBLIC_EVAPP_SERVER_BASE_URL,
	NEXT_PUBLIC_EVAPP_SEVER_REQUEST_TIMEOUT: Number(
		process.env.NEXT_PUBLIC_EVAPP_SEVER_REQUEST_TIMEOUT,
	),
};

export default env;
