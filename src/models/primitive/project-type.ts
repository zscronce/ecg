import { Primitive } from './';

export enum ProjectType {
	Project = 'Project',
	PTO = 'PTO',
	Holiday = 'Holiday',
	'401K' = '401K',
}

export const projectPrimitive = new Primitive(ProjectType, 'project-type');
