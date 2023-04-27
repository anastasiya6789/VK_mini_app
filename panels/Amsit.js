import React from 'react'; 
import PropTypes from 'prop-types'; 
import bridge from '@vkontakte/vk-bridge';
 
import {Button, Panel, PanelHeader, PanelHeaderBack, PanelHeaderContent ,Div } from '@vkontakte/vkui'; 
 
import amsit from '../img/amsit.jfif'; //'../img/название вуза с маленькой буквы.jpg'является названием картинки 
import './Amsit.css'; //название вашего вуза, с расширением css.  
const handleClick1 = async () => {
	try {
	await bridge.send('VKWebAppJoinGroup', { group_id: 135247589 });
	console.log('Подписка выполнена успешно!');
	} catch (error) {
	console.log('Ошибка подписки: ', error);
	}
}; 
 
const Amsit= props => ( //название вашего вуза с большой буквы 
 <Panel id={props.id}> 
  <PanelHeader 
   before={<PanelHeaderBack onClick={props.go} data-to="krasnodar"/>} // Влад оставляет persik(Москва), Веталь пишет piter(Питер), Кирилл пишет rost(для вузов Ростова), novosib(для вузов Новосибирска), Руслан пишет krasnodar(для Краснодара) очень прошу не менять названия, это важно для кода. Регистр также учитывается 
  > 
   Академия маркетинга и социально-информационных технологий  
  </PanelHeader>  
  <img className="Amsit" src={amsit} alt="Persik The Cat"/>  
  <Div> 
   <h1>Академия маркетинга и социально-информационных технологий</h1>  
   <p>Академия создана в 1994 году для удовлетворения растущих потребностей рыночной экономики России в специалистах высокой квалификации. Вместе с соратниками вуз основал доктор исторических наук, профессор, заслуженный деятель науки Кубани С.Н. Якаев.</p> 
   <p>Академия создана в 1994 году для удовлетворения растущих потребностей рыночной экономики России в специалистах высокой квалификации. Вместе с соратниками вуз основал доктор исторических наук, профессор, заслуженный деятель науки Кубани С.Н. Якаев.</p> 
   <h3>Информация о приемной комиссии</h3> 
   <p><b>Адрес:</b> г. Краснодар ул.Зиповская, 5, главный корпус Академии ИМСИТ, каб.101</p>
   <p><b>Телефон приемной комиссии:</b> (861) 278-22-70, 8-988-460-08-46</p>
   <p><b>Электронная почта:</b> pk@imsit.ru</p>
   

  </Div> 
  <Button variant="contained" color="primary" onClick={handleClick1}>
		Подписаться
    </Button>
 </Panel> 
 
); 
 
Amsit.propTypes = { // название вашего вуза с большой буквы 
 id: PropTypes.string.isRequired, 
 go: PropTypes.func.isRequired, 
}; 
 
export default Amsit; // название вашего вуза с большой буквы
