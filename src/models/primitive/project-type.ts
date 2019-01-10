import { Primitive } from './';

export class ProjectType extends Primitive {
	static project = new Primitive('project', 'Project', 'From a Project');
	static pto = new Primitive('pto', 'PTO', 'When employees say "fuck it"');
	static holiday = new Primitive('holiday', 'Holiday', 'When the government says "fuck it"');
	static f01K = new Primitive('401k', '401K', 'Law 401, Section K');
}
