import React from 'react';

import { ContractorGrid } from 'src/components/grid/model-types/contractor';
import { exampleContractors } from 'src/debug/example-contractors';

export class ContractorGridPage extends React.Component {
	constructor(public props: {}) {
		super(props);
	}

	public render(): JSX.Element {
		return (
			<ContractorGrid contractors={exampleContractors}/>
		);
	}
}
