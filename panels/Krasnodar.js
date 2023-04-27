import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack,  Header, Button, Group, Div } from '@vkontakte/vkui';


import './Krasnodar.css';

const Krasnodar= ({ id, go } )=> (
	<Panel id={id}>
		<PanelHeader
			before={<PanelHeaderBack onClick={go} data-to="home"/>} //окно выхода назад
		>
			Краснодар 
		</PanelHeader>
		<Group header={<Header mode="secondary">Navigation Example</Header>}>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="kgau"> 
					Кубанский государственный Аграрный Университет
				</Button>
			</Div>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="kgu"> 
					Кубанский государственный Университет
				</Button>
			</Div>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="amsit"> 
					Академия маркетинга и социально-информационных технологий
				</Button>
			</Div>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="kfreu"> 
					Краснодарский филиал Российского экономического университета имени Г.В. Плеханова
				</Button>
			</Div>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="kgik"> 
					Краснодарский государственный институт культуры
				</Button>
			</Div>
		</Group>
	</Panel>
);

export default Krasnodar


Krasnodar.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};
