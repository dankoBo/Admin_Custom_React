import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Ubuntu', sans-serif;
	}

	a {
		text-decoration: none;
		font-size: 24px;
		color: #FFFFFF;
	}
`

export default GlobalStyles