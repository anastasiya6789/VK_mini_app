import React from 'react'; 
import PropTypes from 'prop-types'; 
import bridge from '@vkontakte/vk-bridge';
 
import { Button, Panel, PanelHeader, PanelHeaderBack, PanelHeaderContent ,Div } from '@vkontakte/vkui'; 
 
import kfreu from '../img/kfreu.jfif'; //'../img/название вуза с маленькой буквы.jpg'является названием картинки 
import './Kfreu.css'; //название вашего вуза, с расширением css.  
const handleClick1 = async () => {
	try {
	await bridge.send('VKWebAppJoinGroup', { group_id: 38043138 });
	console.log('Подписка выполнена успешно!');
	} catch (error) {
	console.log('Ошибка подписки: ', error);
	}
}; 
 
const Kfreu= props => ( //название вашего вуза с большой буквы 
 <Panel id={props.id}> 
  <PanelHeader 
   before={<PanelHeaderBack onClick={props.go} data-to="krasnodar"/>} // Влад оставляет persik(Москва), Веталь пишет piter(Питер), Кирилл пишет rost(для вузов Ростова), novosib(для вузов Новосибирска), Руслан пишет krasnodar(для Краснодара) очень прошу не менять названия, это важно для кода. Регистр также учитывается 
  > 
   Краснодарский филиал Российского экономического университета имени Г.В. Плеханова  
  </PanelHeader>  
  <img className="Kfreu" src={kfreu} alt="Persik The Cat"/>  
  <Div> 
   <h1>Краснодарский филиал Российского экономического университета имени Г.В. Плеханова</h1>  
   <p>Краснодарский филиал федерального государственного бюджетного образовательного учреждения высшего образования Российский экономический университет им. Г.В. Плеханова – это один из ведущих вузов Краснодарского края, крупнейший отраслевой вуз Кубани, осуществляющий подготовку специалистов для торговли и общественного питания.</p>  
   <h3>Информация о приемной комиссии</h3> 
   <p><b>Адрес:</b> г. Краснодар, ул. Садовая, д. 17, каб. 23</p>
   <p><b>Телефон приемной комиссии:</b> 8 (861) 201-10-78, 8 (861) 251-21-40,  8-918-230-01-03 </p>
   <p><b>Электронная почта:</b> krasnodar@rea.ru</p>
  </Div> 
  <Button variant="contained" color="primary" onClick={handleClick1}>
		Подписаться
    </Button>
 </Panel> 
 
); 
 
Kfreu.propTypes = { // название вашего вуза с большой буквы 
 id: PropTypes.string.isRequired, 
 go: PropTypes.func.isRequired, 
}; 
 
export default Kfreu; // название вашего вуза с большой буквы
