import React from 'react';
import * as MUI from '@material-ui/core';

export class Dashboard extends React.Component<{}> {
	constructor(props: {}) {
		super(props);
	}

	render(): JSX.Element {
		return (
			<MUI.Table>
				<MUI.TableHead>
					<MUI.TableRow>
						<MUI.TableCell>2019 Budget</MUI.TableCell>
					</MUI.TableRow>
					<MUI.TableRow>
						<MUI.TableCell/>
						<MUI.TableCell>Q1</MUI.TableCell>
						<MUI.TableCell>Q2</MUI.TableCell>
						<MUI.TableCell>Q3</MUI.TableCell>
						<MUI.TableCell>Q4</MUI.TableCell>
						<MUI.TableCell>Total</MUI.TableCell>
					</MUI.TableRow>
				</MUI.TableHead>
				<MUI.TableBody>
					<MUI.TableRow>
						<MUI.TableCell variant="head">Direct Non-Labor</MUI.TableCell>
						<MUI.TableCell>329,205</MUI.TableCell>
						<MUI.TableCell>342,061</MUI.TableCell>
						<MUI.TableCell>333,157</MUI.TableCell>
						<MUI.TableCell>310,989</MUI.TableCell>
						<MUI.TableCell>1,315,413</MUI.TableCell>
					</MUI.TableRow>
					<MUI.TableRow>
						<MUI.TableCell variant="head">Fringe</MUI.TableCell>
						<MUI.TableCell>367,103</MUI.TableCell>
						<MUI.TableCell>371,863</MUI.TableCell>
						<MUI.TableCell>391,573</MUI.TableCell>
						<MUI.TableCell>415,026</MUI.TableCell>
						<MUI.TableCell>1,545,566</MUI.TableCell>
					</MUI.TableRow>
					<MUI.TableRow>
						<MUI.TableCell variant="head">G&amp;A Labor</MUI.TableCell>
						<MUI.TableCell>130,328</MUI.TableCell>
						<MUI.TableCell>136,196</MUI.TableCell>
						<MUI.TableCell>129,606</MUI.TableCell>
						<MUI.TableCell>118,829</MUI.TableCell>
						<MUI.TableCell>514,959</MUI.TableCell>
					</MUI.TableRow>
					<MUI.TableRow>
						<MUI.TableCell variant="head">G&amp;A Non-Labor</MUI.TableCell>
						<MUI.TableCell>99,359</MUI.TableCell>
						<MUI.TableCell>102,859</MUI.TableCell>
						<MUI.TableCell>112,859</MUI.TableCell>
						<MUI.TableCell>129,606</MUI.TableCell>
						<MUI.TableCell>114,359</MUI.TableCell>
						<MUI.TableCell>459,438</MUI.TableCell>
					</MUI.TableRow>
					<MUI.TableRow>
						<MUI.TableCell variant="head">OH Non-Labor</MUI.TableCell>
						<MUI.TableCell>37,650</MUI.TableCell>
						<MUI.TableCell>37,650</MUI.TableCell>
						<MUI.TableCell>50,150</MUI.TableCell>
						<MUI.TableCell>130,150</MUI.TableCell>
						<MUI.TableCell>255,600</MUI.TableCell>
					</MUI.TableRow>
					<MUI.TableRow>
						<MUI.TableCell variant="head">Revenue</MUI.TableCell>
						<MUI.TableCell>0</MUI.TableCell>
						<MUI.TableCell>0</MUI.TableCell>
						<MUI.TableCell>0</MUI.TableCell>
						<MUI.TableCell>0</MUI.TableCell>
						<MUI.TableCell>0</MUI.TableCell>
					</MUI.TableRow>
				</MUI.TableBody>
			</MUI.Table>
		);
	}
}
