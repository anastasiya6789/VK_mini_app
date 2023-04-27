import React from 'react'; 
import PropTypes from 'prop-types'; 
import bridge from '@vkontakte/vk-bridge';
 
import { Button, Panel, PanelHeader, PanelHeaderBack, PanelHeaderContent, Div } from '@vkontakte/vkui'; 
 
import rggy from '../img/rggy.png';  
import './Rggy.css'; 
 
const handleClick1 = async () => {
	try {
	await bridge.send('VKWebAppJoinGroup', { group_id: 217674261 });
	console.log('Подписка выполнена успешно!');
	} catch (error) {
	console.log('Ошибка подписки: ', error);
	}
};

 
const Rggy= props => (  
 <Panel id={props.id}> 
  <PanelHeader 
   before={<PanelHeaderBack onClick={props.go} data-to="moscow"/>} 
  > 
   Российский государственный гуманитарный университет  
  </PanelHeader>  
  <img className="Rggy" src={rggy} alt="Persik The Cat"/>  
  <Div> 
   <h1>Российский государственный гуманитарный университет</h1>  
   <p>Один из самых популярных московских университетов готовит специалистов практически по всем существующим гуманитарным направлениям.</p>  
   <p>При университете действует колледж, центры довузовского и дополнительного образования. На большинстве базовых для РГГУ направлений (архивное дело, политология и право, теоретическая и прикладная лингвистика и др.) есть международные профили.</p>
   <h3>Информация о приемной комиссии</h3> 
   	<p><b>Адрес:</b>г. Москва, ул. Чаянова, д. 15, корпус 2 (вход в РГГУ через корп. 6) </p>
   	<p><b>Телефон приемной комиссии:</b>+7(495)250-71-71 </p>
   	<p><b>Электронная почта:</b> priem@rggu.ru</p>    
  </Div> 
  <Button variant="contained" color="primary" onClick={handleClick1}>
		Подписаться
    </Button>
 </Panel> 
 
); 
 
Rggy.propTypes = { 
 id: PropTypes.string.isRequired, 
 go: PropTypes.func.isRequired, 
}; 
 
export default Rggy; 
