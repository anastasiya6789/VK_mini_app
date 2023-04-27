import React from 'react'; 
import PropTypes from 'prop-types'; 
import bridge from '@vkontakte/vk-bridge';

import { Button, Panel, PanelHeader, PanelHeaderBack, PanelHeaderContent ,Div } from '@vkontakte/vkui'; 
 
import spgy from '../img/spgy.jfif'; 
import './Spgy.css'; 
const handleClick1 = async () => {
	try {
	await bridge.send('VKWebAppJoinGroup', { group_id: 52298374 });
	console.log('Подписка выполнена успешно!');
	} catch (error) {
	console.log('Ошибка подписки: ', error);
	}
};
 
const Spgy= props => ( 
 <Panel id={props.id}> 
  <PanelHeader 
   before={<PanelHeaderBack onClick={props.go} data-to="piter"/>} 
  > 
   Санкт-Петербургский государственный университет 
  </PanelHeader>  
  <img className="Spgy" src={spgy} alt="Persik The Cat"/>  
  <Div> 
   <h1>Санкт-Петербургский государственный университет </h1>  
   <p>Санкт-Петербургский государственный университет — старейший вуз России, основанный в 1724 году. За 291 год существования СПбГУ закрепил за собой право называться также одним из лучших вузов России: богатое историческое прошлое, современная широкая исследовательская деятельность, активное развитие и новаторство позволяют СПбГУ находиться на передовых рубежах российской науки.</p> 
   <h3>Информация о приемной комиссии</h3> 
   	<p><b>Адрес:</b>Университетская наб., д. 13, лит. Б, каб. 2-5 (2 этаж) </p>
   	<p><b>Телефон приемной комиссии:</b>+7 (931) 334-64-43</p>
   	<p><b>Электронная почта:</b> abiturient@spbu.ru</p>  
   
  </Div> 
  <Button variant="contained" color="primary" onClick={handleClick1}>
		Подписаться
    </Button>
 </Panel> 
 
); 
 
Spgy.propTypes = { 
 id: PropTypes.string.isRequired, 
 go: PropTypes.func.isRequired, 
}; 
 
export default Spgy;
