import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Moscow from './panels/Moscow';
import Mgu from './panels/Mgu';
import Rost from './panels/Rost';
import Krasnodar from './panels/Krasnodar';

import Piter from './panels/Piter';
import Mfti from './panels/Mfti';
import Rggy from './panels/Rggy';
import Ranhigs from './panels/Ranhigs';
import Miep from './panels/Miep';
import Spgy from './panels/Spgy';
import Sppu from './panels/Sppu';
import Spnr from './panels/Spnr';
import Spbg from './panels/Spbg';
import Spmu from './panels/Spmu';
import Kgau from './panels/Kgau';
import Kgu from './panels/Kgu';
import Amsit from './panels/Amsit';
import Kfreu from './panels/Kfreu';
import Kgik from './panels/Kgik';

import Rgyps from './panels/Rgyps';
import Rinx from './panels/Rinx';
import Rizp from './panels/Rizp';
import Dgty from './panels/Dgty';
import Ufy from './panels/Ufy';




const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<ConfigProvider>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout popout={popout}>
						<SplitCol>
							<View activePanel={activePanel}>
								<Home id='home' fetchedUser={fetchedUser} go={go} />
								<Moscow id='moscow' go={go} /> 
								<Mgu id='mgu' go={go} /> 
								<Piter id='piter' go={go} /> 
								
								<Krasnodar id='krasnodar' go={go} />
								<Rost id='rost' go={go} />
								<Mfti id='mfti' go={go} />
								<Rggy id='rggy' go={go} />
								<Ranhigs id='ranhigs' go={go} />
								<Miep id='miep' go={go} />
								<Spgy id='spgy' go={go} />
								<Sppu id='sppu' go={go} />
								<Spnr id='spnr' go={go} />
								<Spbg id='spbg' go={go} />
								<Spmu id='spmu' go={go} />
								<Kgau id='kgau' go={go} />
								<Kgu id='kgu' go={go} />
								<Amsit id='amsit' go={go} />
								<Kfreu id='kfreu' go={go} />
								<Kgik id='kgik' go={go} />
								<Rgyps id='rgyps' go={go} />

								<Rinx id='rinx' go={go} />
								<Rizp id='rizp' go={go} />
								<Dgty id='dgty' go={go} />
								<Ufy id='ufy' go={go} />



							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
