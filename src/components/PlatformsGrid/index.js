/** @jsx jsx*/
import { jsx } from 'theme-ui'

import { navigate } from 'gatsby'

import * as styles from './styles'

const PLATFORMS = [
	{
		name: 'Android',
		platform: 'android',
		image: 'platforms/android.svg',
		link: '/docs/sdk/android?platform=android',
	},
	{
		name: 'iOS',
		platform: 'ios',
		image: 'platforms/apple.svg',
		link: '/docs/sdk/ios?platform=ios',
	},
	{
		name: 'React Native',
		platform: 'react',
		image: 'platforms/react.svg',
		link: '/docs/sdk/react-native?platform=react',
	},
	{
		name: 'Unity',
		platform: 'unity',
		image: 'platforms/unity.svg',
		link: '/docs/sdk/unity?platform=unity',
	},
	{
		name: 'Flutter',
		platform: 'flutter',
		image: 'platforms/flutter.svg',
		link: '/docs/sdk/flutter?platform=flutter',
	},
	{
		name: 'Cocos',
		platform: 'cocos',
		image: 'platforms/cocos.svg',
		link: '/docs/sdk/cocos?platform=cocos',
	},
	{
		name: 'Cordova',
		platform: 'cordova',
		image: 'platforms/cordova.svg',
		link: '/docs/sdk/cordova?platform=cordova',
	},
	{
		name: 'Ionic',
		platform: 'ionic',
		image: 'platforms/ionic.svg',
		link: '/docs/sdk/ionic?platform=ionic',
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
						sx={styles.box}
						onClick={() => handleNavigate(p.platform, p.link)}
					>
						<img
							src={require(`assets/${p.image}`)}
							alt={p.name}
							className="platform-image"
							sx={{ mb: 3 }}
						/>
						<h3 sx={styles.boxName}>{p.name}</h3>
						<span sx={styles.boxType}>Mobile</span>
					</div>
				)
			})}
		</div>
	)
}
