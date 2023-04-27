import React from 'react'; 
import PropTypes from 'prop-types'; 
import bridge from '@vkontakte/vk-bridge';
 
import {Button, Panel, PanelHeader, PanelHeaderBack, PanelHeaderContent, Div } from '@vkontakte/vkui'; 
 
import miep from '../img/miep.jfif';  
import './Miep.css';   
const handleClick1 = async () => {
	try {
	await bridge.send('VKWebAppJoinGroup', { group_id: 188213381 });
	console.log('Подписка выполнена успешно!');
	} catch (error) {
	console.log('Ошибка подписки: ', error);
	}
};
 
const Miep= props => (  
 <Panel id={props.id}> 
  <PanelHeader 
   before={<PanelHeaderBack onClick={props.go} data-to="moscow"/>}  
  > 
   Международный институт экономики и права  
  </PanelHeader>  
  <img className="Miep" src={miep} alt="Persik The Cat"/>  
  <Div> 
   <h1>Международный институт экономики и права</h1>  
   <p>Международный институт экономики и права (МИЭП) готовит юристов, экономистов, управленцев и менеджеров. Возможно обучение в формате онлайн. </p>  
   <p>Международный институт экономики и права — один из первых негосударственных вузов столицы. Начал работать в начале 90-х. Имеет лицензию. На данный момент нет государственной аккредитации.</p> 
   <h3>Информация о приемной комиссии</h3> 
   	<p><b>Адрес:</b>г. Москва, Рубцовская наб. 3, стр. 1 </p>
   	<p><b>Телефон приемной комиссии:</b>+7 (909) 169-07-00 </p>
   	<p><b>Электронная почта:</b> priem@miep.ru</p>  
  </Div> 
  <Button variant="contained" color="primary" onClick={handleClick1}>
		Подписаться
    </Button>
 </Panel> 
 
); 
 
Miep.propTypes = {  
 id: PropTypes.string.isRequired, 
 go: PropTypes.func.isRequired, 
}; 
 
export default Miep; 
