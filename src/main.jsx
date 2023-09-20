import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';

// router
import { Router } from './Router.jsx';

// assets
import './normalize.css';
import '@assets/fonts/font.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RecoilRoot>
			<Router />
		</RecoilRoot>
	</React.StrictMode>,
);
