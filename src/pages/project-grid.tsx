import React from 'react';

import { ProjectGrid } from 'src/components/grid/model-types/project';

import { exampleProjects } from 'src/debug/example-projects';

export class ProjectGridPage extends React.Component {
	constructor(public props: {}) {
		super(props);
	}

	render(): JSX.Element {
		return (
			<ProjectGrid projects={exampleProjects} />
		);
	}
}
