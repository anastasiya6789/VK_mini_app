import React from 'react'; 
import PropTypes from 'prop-types'; 
import bridge from '@vkontakte/vk-bridge';
 
import {Button, Panel, PanelHeader, PanelHeaderBack, PanelHeaderContent ,Div } from '@vkontakte/vkui'; 
 
import ufy from '../img/ufy.jfif'; //'../img/название вуза с маленькой буквы.jpg'является названием картинки 
import './Ufy.css'; //название вашего вуза, с расширением css. 
const handleClick1 = async () => {
	try {
	await bridge.send('VKWebAppJoinGroup', { group_id: 47535294 });
	console.log('Подписка выполнена успешно!');
	} catch (error) {
	console.log('Ошибка подписки: ', error);
	}
}; 
 
const Ufy= props => ( //название вашего вуза с большой буквы 
 <Panel id={props.id}> 
  <PanelHeader 
   before={<PanelHeaderBack onClick={props.go} data-to="rost"/>} // Влад оставляет persik(Москва), Веталь пишет piter(Питер), Кирилл пишет rost(для вузов Ростова), novosib(для вузов Новосибирска), Руслан пишет krasnodar(для Краснодара) очень прошу не менять названия, это важно для кода. Регистр также учитывается 
  > 
   Южный Федеральный Университет  
  </PanelHeader>  
  <img className="Ufy" src={ufy} alt="Persik The Cat"/>  
  <Div> 
   <h1>Южный федеральный университет</h1> 
   <p>Университет является правопреемником государственных образовательных учреждений высшего профессионального образования «Ростовский государственный университет», «Ростовская государственная академия архитектуры и искусства», «Ростовский государственный педагогический университет» и «Таганрогский государственный радиотехнический университет».</p>  
   <p>Главной стратегической целью Программы развития ЮФУ является создание национального университета мирового уровня, способного оказать существенное влияние на инновационное развитие Южного федерального округа и России, повышение ее национальной безопасности и конкурентоспособности на глобальных рынках технологий и знаний.</p> 
   <h3>Информация о приемной комиссии</h3> 
   	<p><b>Адрес:</b> г. Ростов-на-Дону, Б. Садовая 105/42, к. 206</p>
   	<p><b>Телефон приемной комиссии:</b> 8-800-700-33-98 </p>
   	<p><b>Электронная почта:</b>zpk@sfedu.ru</p>  
  </Div> 
  <Button variant="contained" color="primary" onClick={handleClick1}>
		Подписаться
    </Button>
 </Panel> 
 
); 
 
Ufy.propTypes = { // название вашего вуза с большой буквы 
 id: PropTypes.string.isRequired, 
 go: PropTypes.func.isRequired, 
}; 
 
export default Ufy; // название вашего вуза с большой буквы