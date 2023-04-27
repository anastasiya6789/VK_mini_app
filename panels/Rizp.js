import React from 'react'; 
import PropTypes from 'prop-types'; 
import bridge from '@vkontakte/vk-bridge';
 
import {Button, Panel, PanelHeader, PanelHeaderBack, PanelHeaderContent ,Div} from '@vkontakte/vkui'; 
 
import rizp from '../img/rizp.jfif'; //'../img/название вуза с маленькой буквы.jpg'является названием картинки 
import './Rinx.css'; //название вашего вуза, с расширением css.  
const handleClick1 = async () => {
	try {
	await bridge.send('VKWebAppJoinGroup', { group_id: 117893860 });
	console.log('Подписка выполнена успешно!');
	} catch (error) {
	console.log('Ошибка подписки: ', error);
	}
};
 
const Rizp= props => ( //название вашего вуза с большой буквы 
 <Panel id={props.id}> 
  <PanelHeader 
   before={<PanelHeaderBack onClick={props.go} data-to="rost"/>} // Влад оставляет persik(Москва), Веталь пишет piter(Питер), Кирилл пишет rost(для вузов Ростова), novosib(для вузов Новосибирска), Руслан пишет krasnodar(для Краснодара) очень прошу не менять названия, это важно для кода. Регистр также учитывается 
  > 
   Ростовский институт защиты предпринимателя
  </PanelHeader>  
  <img className="Rizp" src={rizp} alt="Persik The Cat"/>  
  <Div> 
   <h1>Ростовский институт защиты предпринимателя</h1> 
   <p>Ростовский институт защиты предпринимателя имеет аккредитационный статус по типу «высшее учебное заведение» и виду — «институт». Осуществляет образовательную деятельность с 1993 года и является правопреемником Ростовского филиала Московского института защиты предпринимателя. С 3 мая 2001г.</p>  
   <h3>Информация о приемной комиссии</h3> 
   	<p><b>Адрес:</b>г. Ростов-на-Дону, Первомайский р-н, ул. Сержантова, д. 2/104 </p>
   	<p><b>Телефон приемной комиссии:</b> 8(863) 221-80-55 </p>
   	<p><b>Электронная почта:</b> abit@rizp.ru</p>  
   
  </Div> 
  <Button variant="contained" color="primary" onClick={handleClick1}>
		Подписаться
    </Button>
 </Panel> 
 
); 
 
Rizp.propTypes = { // название вашего вуза с большой буквы 
 id: PropTypes.string.isRequired, 
 go: PropTypes.func.isRequired, 
}; 
 
export default Rizp; // название вашего вуза с большой буквы