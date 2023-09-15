import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from './Router.jsx';
import './assets/fonts/font.css';
import './normalize.css';
import { RecoilRoot } from 'recoil';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RecoilRoot>
		<Router />
		</RecoilRoot>
	</React.StrictMode>,
);
