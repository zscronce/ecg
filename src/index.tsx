import React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import {App} from './components/app';
import {Chrome} from './components/chrome';
import {Routing} from './routing';

const robotoLink = document.createElement('link');
robotoLink.rel = 'stylesheet';
robotoLink.href = 'https://fonts.googleapis.com/css?family=Roboto:300,400,500';
document.head.appendChild(robotoLink);

const matIconsLink = document.createElement('link');
matIconsLink.rel = 'stylesheet';
matIconsLink.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
document.head.appendChild(matIconsLink);

const responsiveMetaTag = document.createElement('meta');
responsiveMetaTag.name = 'viewport';
responsiveMetaTag.content = 'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no';
document.head.appendChild(responsiveMetaTag);

ReactDOM.render(
	(
		<App>
			<BrowserRouter>
				<Chrome>
					<Routing/>
				</Chrome>
			</BrowserRouter>
		</App>
	),
	document.getElementById('root'),
);
