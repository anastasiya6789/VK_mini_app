import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack,  Header, Button, Group, Div } from '@vkontakte/vkui';


import './Moscow.css'; 

const Moscow= ({ id, go } )=> ( 
	<Panel id={id}>
		<PanelHeader
			before={<PanelHeaderBack onClick={go} data-to="home"/>} //окно выхода назад
		>
			Москва 
		</PanelHeader>
		<Group header={<Header mode="secondary">Navigation Example</Header>}>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="mgu"> 
					МГУ имени Ломоносова
				</Button>
				
			</Div>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="mfti"> 
					Московский физико-технический университет 
				</Button>
			</Div>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="rggy">
					Российский государственный гуманитарный университет
				</Button>
			</Div>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="ranhigs"> 
					ИОМ РАНХиГС
				</Button>
			</Div>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="miep"> 
					Международный институт экономики и права
				</Button>
			</Div>
		</Group>
	</Panel>
);

export default Moscow 


Moscow.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};
