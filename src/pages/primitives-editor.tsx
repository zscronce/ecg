import React from 'react';

import { EmployeeType } from 'src/models/primitive/employee-type';
import { ExpenseType } from '../models/primitive/expense-type';
import { PrimitiveList } from 'src/components/primitive-list';
import { LaborType } from 'src/models/primitive/labor-type';
import { ProjectType } from '../models/primitive/project-type';

export class PrimitivesEditorPage extends React.Component {
	render(): JSX.Element {
		return (
			<>
				<PrimitiveList primitive={EmployeeType}/>
				<PrimitiveList primitive={ExpenseType}/>
				<PrimitiveList primitive={LaborType}/>
				<PrimitiveList primitive={ProjectType}/>
			</>
		);
	}
}
