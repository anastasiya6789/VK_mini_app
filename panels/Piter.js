import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack,  Header, Button, Group, Div } from '@vkontakte/vkui';


import './Piter.css';

const Piter= ({ id, go } )=> (
	<Panel id={id}>
		<PanelHeader
			before={<PanelHeaderBack onClick={go} data-to="home"/>} //окно выхода назад
		>
			Питер 
		</PanelHeader>
		<Group header={<Header mode="secondary">Navigation Example</Header>}>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="spgy"> 
					Санкт-Петербургский государственный университет 
				</Button>
			</Div>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="sppu"> 
					Санкт-Петербургский политехнический университет Петра Великого
				</Button>
			</Div>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="spnr"> 
					Санкт-Петербургский национальный исследовательский университет информационных технологий, механики и оптики
				</Button>
			</Div>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="spbg"> 
					Санкт-Петербургский государственный экономический университет
				</Button>
			</Div>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="spmu"> 
					Санкт-Петербургский Горный университет
				</Button>
			</Div>
		</Group>
	</Panel>
);

export default Piter


Piter.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};
