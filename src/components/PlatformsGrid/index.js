/** @jsx jsx*/
import { jsx } from 'theme-ui'

import { navigate } from 'gatsby'

import * as styles from './styles'

import { ReactComponent as Android } from 'assets/platforms/android.svg'
import { ReactComponent as Apple } from 'assets/platforms/apple.svg'
import { ReactComponent as React } from 'assets/platforms/react.svg'
import { ReactComponent as Unity } from 'assets/platforms/unity.svg'
import { ReactComponent as Unreal } from 'assets/platforms/unreal.svg'
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
		link: 'https://mobile.developer.smartlook.com/reference/android-api-documentation',
	},
	{
		name: 'iOS',
		platform: 'ios',
		image: <Apple />,
		link: 'https://mobile.developer.smartlook.com/reference/ios-api-documentation',
	},
	{
		name: 'React Native',
		platform: 'react',
		image: <React />,
		link: 'https://mobile.developer.smartlook.com/reference/react-native-api-documentation',
	},
	{
		name: 'Unity',
		platform: 'unity',
		image: <Unity />,
		link: 'https://mobile.developer.smartlook.com/reference/unity-sdk-documentation',
	},
	{
		name: 'Unreal Engine',
		platform: 'unreal',
		image: <Unreal />,
		link: 'https://mobile.developer.smartlook.com/reference/unreal-engine-api-documentation',
	},
	{
		name: 'Flutter',
		platform: 'flutter',
		image: <Flutter />,
		link: 'https://mobile.developer.smartlook.com/reference/flutter-api-documentation',
	},
	{
		name: 'Cocos',
		platform: 'cocos',
		image: <Cocos />,
		link: 'https://mobile.developer.smartlook.com/reference/cocos-api-documentation',
	},
	{
		name: 'Cordova',
		platform: 'cordova',
		image: <Cordova />,
		link: 'https://mobile.developer.smartlook.com/reference/cordoba-api-documentation',
	},
	{
		name: 'Ionic',
		platform: 'ionic',
		image: <Ionic />,
		link: 'https://mobile.developer.smartlook.com/reference/ionic-api-documentation',
	},
	{
		name: 'Xamarin',
		platform: 'xamarin',
		image: <Xamarin />,
		link: 'https://mobile.developer.smartlook.com/reference/xamarin-api-documentation',
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
