let API_URL = atob(sessionStorage.getItem(btoa('API_URL')));
let endpoint = null;

if (API_PORT && API_URL) endpoint = path => `${API_URL}${path}`;

const getPORT = async () => {
	const response = await fetch('/config.json');
	const { api_port } = await response.json();
	return api_port;
};

const generateAPIURL = async () => {
	API_PORT = await getPORT();
	API_URL = `${window.location.protocol}//${window.location.hostname}:${API_PORT}/`;

	sessionStorage.setItem(btoa('API_URL'), btoa(API_URL));
	return;
};

const generateEndpoint = async () => {
	if (!API_URL) await generateAPIURL();
	endpoint = path => `${API_URL}${path}`;
	return;
};

const fetcher = async (path, options = {}, textMode = false) => {
	if (endpoint == null) await generateEndpoint();
	return new Promise(async (resolve, reject) => {
		try {
			const response = await fetch(endpoint(path), options);
			const data = textMode
				? await response.text()
				: await response.json();
			resolve(data);
		} catch (e) {
			reject(e);
		}
	});
};

export default fetcher;
