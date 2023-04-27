import React from 'react'; 
import PropTypes from 'prop-types'; 
import bridge from '@vkontakte/vk-bridge';
 
import {Button, Panel, PanelHeader, PanelHeaderBack, PanelHeaderContent ,Div } from '@vkontakte/vkui'; 
 
import rgyps from '../img/rgyps.jfif'; //'../img/название вуза с маленькой буквы.jpg'является названием картинки 
import './Rgyps.css'; //название вашего вуза, с расширением css.  
const handleClick1 = async () => {
	try {
	await bridge.send('VKWebAppJoinGroup', { group_id: 435918 });
	console.log('Подписка выполнена успешно!');
	} catch (error) {
	console.log('Ошибка подписки: ', error);
	}
};
 
const Rgyps= props => ( //название вашего вуза с большой буквы 
 <Panel id={props.id}> 
  <PanelHeader 
   before={<PanelHeaderBack onClick={props.go} data-to="rost"/>} // Влад оставляет persik(Москва), Веталь пишет piter(Питер), Кирилл пишет rost(для вузов Ростова), novosib(для вузов Новосибирска), Руслан пишет krasnodar(для Краснодара) очень прошу не менять названия, это важно для кода. Регистр также учитывается 
  > 
   Ростовский государственный университет путей сообщения
  </PanelHeader>  
  <img className="Rgyps" src={rgyps} alt="Persik The Cat"/>  
  <Div> 
   <h1>Ростовский государственный университет путей сообщения</h1> 
   <p>Вуз образован в статусе института инженеров путей сообщения для железнодорожного, автомобильного и речного транспорта. Готовились специалисты не только для Российской Федерации, но и для Армении, Азербайджана и Грузии. С тех пор подготовлено около 100 тысяч специалистов. Сегодня РГУПС — один из крупнейших университетских образовательных и научных комплексов, и культурных центров на юге России. В университете активно развивается международное сотрудничество по широкому спектру научно-образовательной и культурно- просветительской деятельности.</p>  
   <h3>Информация о приемной комиссии</h3> 
   	<p><b>Адрес:</b>Ростов-на-Дону пл. Ростовского Стрелкового Полка Народного Ополчения, д. 2, ком. №А-103 </p>
   	<p><b>Телефон приемной комиссии:</b> 8 800 707-19-29, (863) 255-31-61 </p>
   	<p><b>Электронная почта:</b> prkom@rgups.ru</p>    
   
  </Div> 
  <Button variant="contained" color="primary" onClick={handleClick1}>
		Подписаться
    </Button>
 </Panel> 
 
); 
 
Rgyps.propTypes = { // название вашего вуза с большой буквы 
 id: PropTypes.string.isRequired, 
 go: PropTypes.func.isRequired, 
}; 
 
export default Rgyps; // название вашего вуза с большой буквы