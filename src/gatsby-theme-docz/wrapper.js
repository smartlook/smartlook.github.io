import * as React from 'react'
import { Helmet } from 'react-helmet-async'
const smartlookTrackScript = `
  window.smartlook||(function(d) {
    var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
    var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
    c.charset='utf-8';c.src='https://recorder.alfa.smartlook.com/recorder.js';h.appendChild(c);
    })(document);
    smartlook('init', '8706f21ef54df2622b3ced641a0943b918119af4', {
        "host": "manager.alfa.smartlook.com"
    });
`
const Wrapper = ({ children, doc }) => (
	<React.Fragment>
		<Helmet>
			<script type="text/javascript" defer={true}>
				{smartlookTrackScript}
			</script>
		</Helmet>
		{children}
	</React.Fragment>
)
export default Wrapper
