import {GalleryRequestResponse} from '../components/Gallery/interface';

const GALLERY_API_URL = 'https://api.jsonbin.io/b/5e95bd3c5fa47104cea035df';

export const getGalleryData = async (): Promise<GalleryRequestResponse> => {

	try {
		const req = await fetch(GALLERY_API_URL);

		return req.json();
	} catch(err) {
		
		return {
			'status': -1,
			'message': err.message
		};
	}
};
