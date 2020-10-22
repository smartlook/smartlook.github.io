/** @jsx jsx*/
import { jsx } from 'theme-ui'

import { navigate } from 'gatsby'

import * as styles from './styles'

import { ReactComponent as Android } from 'assets/platforms/android.svg'
import { ReactComponent as Apple } from 'assets/platforms/apple.svg'
import { ReactComponent as React } from 'assets/platforms/react.svg'
import { ReactComponent as Unity } from 'assets/platforms/unity.svg'
import { ReactComponent as Flutter } from 'assets/platforms/flutter.svg'
import { ReactComponent as Cocos } from 'assets/platforms/cocos.svg'
import { ReactComponent as Cordova } from 'assets/platforms/cordova.svg'
import { ReactComponent as Ionic } from 'assets/platforms/ionic.svg'
import { ReactComponent as Xamarin } from 'assets/platforms/xamarin.svg'

const PLATFORMS = [
	{
		name: 'Android',
		platform: 'android',
		image: <Android />,
		link: '/docs/sdk/android?platform=android',
	},
	{
		name: 'iOS',
		platform: 'ios',
		image: <Apple />,
		link: '/docs/sdk/ios?platform=ios',
	},
	{
		name: 'React Native',
		platform: 'react',
		image: <React />,
		link: '/docs/sdk/react-native?platform=react',
	},
	{
		name: 'Unity',
		platform: 'unity',
		image: <Unity />,
		link: '/docs/sdk/unity?platform=unity',
	},
	{
		name: 'Flutter',
		platform: 'flutter',
		image: <Flutter />,
		link: '/docs/sdk/flutter?platform=flutter',
	},
	{
		name: 'Cocos',
		platform: 'cocos',
		image: <Cocos />,
		link: '/docs/sdk/cocos?platform=cocos',
	},
	{
		name: 'Cordova',
		platform: 'cordova',
		image: <Cordova />,
		link: '/docs/sdk/cordova?platform=cordova',
	},
	{
		name: 'Ionic',
		platform: 'ionic',
		image: <Ionic />,
		link: '/docs/sdk/ionic?platform=ionic',
	},
	{
		name: 'Xamarin',
		platform: 'xamarin',
		image: <Xamarin />,
		link: '/docs/sdk/xamarin?platform=xamarin',
	},
]

export const PlatformsGrid = () => {
	const handleNavigate = (platform, to) => {
		navigate(to)
	}

	return (
		<div sx={styles.grid}>
			<div sx={styles.box} onClick={() => handleNavigate('web', '/docs/web')}>
				<h3 sx={styles.boxName}>Web</h3>
				<span sx={styles.boxType}>Website</span>
				<p sx={styles.webDesc}>
					Smartlook JavaScript API offers a number of extra features to make
					your recordings even better. Visitor info, GDPR, ...
				</p>
			</div>
			{PLATFORMS.map((p, index) => {
				return (
					<div
						key={p.name}
						sx={styles.box}
						onClick={() => handleNavigate(p.platform, p.link)}
					>
						{p.image}
						<h3 sx={styles.boxName}>{p.name}</h3>
						<span sx={styles.boxType}>Mobile</span>
					</div>
				)
			})}
		</div>
	)
}
