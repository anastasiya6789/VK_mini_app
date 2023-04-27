import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack,  Header, Button, Group, Div } from '@vkontakte/vkui';


import './Rost';

const Rost= ({ id, go } )=> (
	<Panel id={id}>
		<PanelHeader
			before={<PanelHeaderBack onClick={go} data-to="home"/>} //окно выхода назад
		>
			Ростов-на-Дону 
		</PanelHeader>
		<Group header={<Header mode="secondary">Navigation Example</Header>}>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="rgyps">
					Ростовский государственный университет путей сообщения
				</Button>
			</Div>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="rinx"> 
					Ростовский государственный экономический университет
				</Button>
			</Div>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="rizp">
					Ростовский институт защиты предпринимателя
				</Button>
			</Div>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="dgty"> 
					Донской государственный технический университет
				</Button>
			</Div>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="ufy"> 
					Южный федеральный университет
				</Button>
			</Div>
		</Group>
	</Panel>
);

export default Rost


Rost.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};
