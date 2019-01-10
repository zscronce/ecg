import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
	palette: {
		primary: blue,
		secondary: pink,
	},
	// See https://material-ui.com/style/typography/#migration-to-typography-v2
	typography: {
		useNextVariants: true,
	},
});
