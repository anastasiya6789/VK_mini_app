import React from 'react';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';


import { Button, Panel, PanelHeader, PanelHeaderBack, PanelHeaderContent, Div } from '@vkontakte/vkui';

import mgu from '../img/persic.jpg'; //mgu
import './Mgu.css';  //mgu

const handleClick1 = async () => {
	try {
	await bridge.send('VKWebAppJoinGroup', { group_id: 78019879 });
	console.log('Подписка выполнена успешно!');
	} catch (error) {
	console.log('Ошибка подписки: ', error);
	}
};
const Mgu= props => ( 
	<Panel id={props.id}>
		<PanelHeader
			before={<PanelHeaderBack onClick={props.go} data-to="moscow"/>} //Moscow
		>
			МГУ имени Ломоносова 
		</PanelHeader> 
		<img className="Mgu" src={mgu} alt="Persik The Cat"/> 
		<Div>
			<h1>МГУ имени Ломоносова</h1> 
			<p>МГУ был основан указом императрицы Елизаветы от 12 (23) января 1775 в городе Москве по инициативе М. В. Ломоносова и И. И. Шувалова. Традиционно днём рождения МГУ считается Татьянин день, 25 января по новому стилю.</p> 
			<p>7 мая 1940 года университету присвоено имя Ломоносова. Работают филиалы в Севастополе, Пущино, Черноголовке, Астане (Казахстан), Ташкенте (Узбекистан). С 1988 функционировал филиал в Ульяновске, выделившийся в 1995 в Ульяновский государственный университет. Научная библиотека МГУ — одна из крупнейших библиотек России.</p>
			<h3>Информация о приемной комиссии</h3> 
   			<p><b>Адрес:</b> Москва, Ленинские горы, МГУ, Главное здание, сектор А, этаж 12, комната 1208а </p>
   			<p><b>Телефон приемной комиссии:</b> +7 (495) 939-33-98 </p>
   			<p><b>Электронная почта:</b> cpk2022@rector.msu.ru</p> 
		</Div>
		<Button variant="contained" color="primary" onClick={handleClick1}>
			Подписаться
		</Button>

	</Panel>

);

Mgu.propTypes = { 
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Mgu; 
