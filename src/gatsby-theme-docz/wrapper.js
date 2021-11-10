import * as React from 'react'
import { Helmet } from 'react-helmet-async'

const smartlookTrackScript = `
  window.smartlook||(function(d) {
    var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
    var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
    c.charset='utf-8';c.src='https://web-sdk.beta.smartlook.cloud/recorder.js';h.appendChild(c);
    })(document);
    smartlook('init', '105bfc83a325ab38e95897cca365d980b9541bf7', {
		host:"manager.beta.smartlook.cloud",
		loggingLevel:0,
		forceSetupData:{
			recording:{
				recordConsole: true,
				recordNetwork: true,
			},
		}
	});
`
const Wrapper = ({ children, doc }) => (
	<React.Fragment>
		<Helmet>
			<link
				rel="shortcut icon"
				type="image/png"
				href={require('assets/favicon.png')}
			></link>
			<script type="text/javascript" defer={true}>
				{smartlookTrackScript}
			</script>
		</Helmet>
		{children}
	</React.Fragment>
)
export default Wrapper
