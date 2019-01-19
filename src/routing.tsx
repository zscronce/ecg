import React from 'react';
import {Route} from 'react-router-dom';
import {Dashboard} from '@material-ui/icons';

import {ContractorGridPage} from 'src/pages/contractor-grid';
import {EmployeeGridPage} from 'src/pages/employee-grid';
import {PrimitivesEditorPage} from 'src/pages/primitives-editor';
import {HolidayGridPage} from 'src/pages/holiday-grid';
import {HomePage} from 'src/pages/home';
import {LoginPage} from 'src/pages/login';
import {ProjectGridPage} from 'src/pages/project-grid';
import {Sheet} from 'src/pages/prototype/sheet';

export class Routing extends React.Component<{}> {
	render(): JSX.Element {
		return (
			<>
				<Route exact path="/" component={HomePage}/>
				<Route exact path="/login" component={LoginPage}/>
				<Route exact path="/employees" component={EmployeeGridPage}/>
				<Route exact path="/holidays" component={HolidayGridPage}/>
				<Route exact path="/projects" component={ProjectGridPage}/>
				<Route exact path="/contractors" component={ContractorGridPage}/>
				<Route exact path="/epl" component={PrimitivesEditorPage}/>
				<Route exact path="/dashboard" component={Dashboard}/>
				<Route exact path="/sheet" component={Sheet}/>
			</>
		);
	}
}
