import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from './Router.jsx';
import "./assets/fonts/font.css"

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Router />
	</React.StrictMode>,
);
