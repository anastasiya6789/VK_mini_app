import React from 'react'; 
import PropTypes from 'prop-types'; 
import bridge from '@vkontakte/vk-bridge';
 
import {Button, Panel, PanelHeader, PanelHeaderBack, PanelHeaderContent ,Div} from '@vkontakte/vkui'; 
 
import rinx from '../img/rinx.jfif'; //'../img/название вуза с маленькой буквы.jpg'является названием картинки 
import './Rinx.css'; //название вашего вуза, с расширением css.  
const handleClick1 = async () => {
	try {
	await bridge.send('VKWebAppJoinGroup', { group_id: 36632 });
	console.log('Подписка выполнена успешно!');
	} catch (error) {
	console.log('Ошибка подписки: ', error);
	}
};
 
const Rinx= props => ( //название вашего вуза с большой буквы 
 <Panel id={props.id}> 
  <PanelHeader 
   before={<PanelHeaderBack onClick={props.go} data-to="rost"/>} // Влад оставляет persik(Москва), Веталь пишет piter(Питер), Кирилл пишет rost(для вузов Ростова), novosib(для вузов Новосибирска), Руслан пишет krasnodar(для Краснодара) очень прошу не менять названия, это важно для кода. Регистр также учитывается 
  > 
   Ростовский государственный экономический университет  
  </PanelHeader>  
  <img className="Rinx" src={rinx} alt="Persik The Cat"/> 
  <Div> 
   <h1>Ростовский государственный экономический университет</h1> 
   <p>РГЭУ сегодня - один из крупнейших университетов и лидеров экономического образования в России, который в условиях реорганизации сохраняет лучшие традиции российского образования, передовые обучающие технологии, научные школы, обеспечивает высокие стандарты экономического образования, делая его конкурентоспособным не только на федеральном, но и на международном уровне.РГЭУ (РИНХ) сегодня - один из крупнейших университетов и лидеров экономического образования в России, который в условиях реорганизации сохраняет лучшие традиции российского образования, передовые обучающие технологии, научные школы, обеспечивает высокие стандарты экономического образования, делая его конкурентоспособным не только на федеральном, но и на международном уровне.</p>  
   <h3>Информация о приемной комиссии</h3> 
   	<p><b>Адрес:</b>г. Ростов-на-Дону, ул. Б. Садовая, 69 (1 этаж, к. 101, 108, 110) </p>
   	<p><b>Телефон приемной комиссии:</b> +7 (863) 237-02-60 </p>
   	<p><b>Электронная почта:</b> pk@rsue.ru</p>    
   
  </Div> 
  <Button variant="contained" color="primary" onClick={handleClick1}>
		Подписаться
    </Button>
 </Panel> 
 
); 
 
Rinx.propTypes = { // название вашего вуза с большой буквы 
 id: PropTypes.string.isRequired, 
 go: PropTypes.func.isRequired, 
}; 
 
export default Rinx; // название вашего вуза с большой