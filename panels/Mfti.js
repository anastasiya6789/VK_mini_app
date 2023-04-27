import React from 'react'; 
import PropTypes from 'prop-types'; 
import bridge from '@vkontakte/vk-bridge';
 
import { Button, Panel, PanelHeader, PanelHeaderBack, PanelHeaderContent ,Div } from '@vkontakte/vkui'; 
 
import mfti from '../img/mfti.png'; 
import './Mfti.css'; 

const handleClick1 = async () => {
	try {
	await bridge.send('VKWebAppJoinGroup', { group_id: 1169182 });
	console.log('Подписка выполнена успешно!');
	} catch (error) {
	console.log('Ошибка подписки: ', error);
	}
};

const Mfti= props => ( 
	<Panel id={props.id}> 
		<PanelHeader
			before={<PanelHeaderBack onClick={props.go} data-to="moscow"/>} 
		>
			Московский физико-технический университет 
		</PanelHeader>  
		<img className="Mfti" src={mfti} alt="Mfti"/> 
		<Div> 
			<h1>Московский физико-технический университет</h1> 
			<p>МФТИ является одним из ведущих технических вузов России. Институт по праву занимает лидирующее место по качественному приему абитуриентов и квалифицированной подготовке выпускников.</p>
			<p>Студенты и выпускники МФТИ являются представителями узкого круга лиц, которые, благодаря окружающим их возможностям междисциплинарного научного образования, могут в полной мере реализовать свой потенциал.</p>
			<h3>Информация о приемной комиссии</h3> 
   			<p><b>Адрес:</b> г. Долгопрудный, Институтский переулок, д. 7, МФТИ, Аудиторный корпус, 109 ауд. </p>
   			<p><b>Телефон приемной комиссии:</b> +7 (495) 408-48-00 </p>
   			<p><b>Электронная почта:</b> pk.bachelor@mipt.ru</p>
		</Div> 
		<Button variant="contained" color="primary" onClick={handleClick1}>
		Подписаться
    	</Button>
	</Panel> 

); 

Mfti.propTypes = { 
id: PropTypes.string.isRequired, 
go: PropTypes.func.isRequired, 
}; 

export default Mfti; 
