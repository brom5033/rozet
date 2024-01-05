import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const cardState = atom({
	key: 'name',
	default: '',
	effects_UNSTABLE: [persistAtom],
});
