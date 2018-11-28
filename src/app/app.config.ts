import { environment } from "../environments/environment";

export const config = {
    appName: 'hologram mart',
    version: '0.0.0',
    backendAPI_URL: `${environment.backendHost}/api`,
    backendAUTH_API_URL: `${environment.backendHost}/auth`
};