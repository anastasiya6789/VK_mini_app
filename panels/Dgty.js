import React from 'react'; 
import PropTypes from 'prop-types'; 
import bridge from '@vkontakte/vk-bridge';
 
import {Button, Panel, PanelHeader, PanelHeaderBack, PanelHeaderContent ,Div} from '@vkontakte/vkui'; 
 
import dgty from '../img/dgty.jfif'; //'../img/название вуза с маленькой буквы.jpg'является названием картинки 
import './Dgty.css'; //название вашего вуза, с расширением css. 
const handleClick1 = async () => {
	try {
	await bridge.send('VKWebAppJoinGroup', { group_id: 9346281 });
	console.log('Подписка выполнена успешно!');
	} catch (error) {
	console.log('Ошибка подписки: ', error);
	}
}; 
 
const Dgty= props => ( //название вашего вуза с большой буквы 
 <Panel id={props.id}> 
  <PanelHeader 
   before={<PanelHeaderBack onClick={props.go} data-to="rost"/>} // Влад оставляет persik(Москва), Веталь пишет piter(Питер), Кирилл пишет rost(для вузов Ростова), novosib(для вузов Новосибирска), Руслан пишет krasnodar(для Краснодара) очень прошу не менять названия, это важно для кода. Регистр также учитывается 
  > 
   Донской государственный технический университет 
  </PanelHeader>  
  <img className="Dgty" src={dgty} alt="Persik The Cat"/>  
  <Div> 
   <h1>Донской государственный технический университет</h1>  
   <p>ДГТУ сегодня – это вуз, готовящий специалистов XXI века - разносторонне образованных, обладающих широким кругозором, высоким чувством ответственности и патриотизма, готовых вступить в активную самостоятельную жизнь специалистов.</p>  
   <h3>Информация о приемной комиссии</h3> 
   <p><b>Адрес:</b> Ростов-на-Дону, пл. Гагарина 1, главный корпус ДГТУ, 1 этаж, каб. 143а, 102</p>
   <p><b>Телефон приемной комиссии:</b> 8-863-306-20-00, 8-800-100-19-30</p>
   <p><b>Электронная почта:</b> spu-33@donstu.ru</p>
   
  </Div> 
  <Button variant="contained" color="primary" onClick={handleClick1}>
		Подписаться
    </Button>
 </Panel> 
 
); 
 
Dgty.propTypes = { // название вашего вуза с большой буквы 
 id: PropTypes.string.isRequired, 
 go: PropTypes.func.isRequired, 
}; 
export default Dgty; // название вашего вуза с большой буквы