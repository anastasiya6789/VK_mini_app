import React from 'react'; 
import PropTypes from 'prop-types'; 
import bridge from '@vkontakte/vk-bridge';
 
import { Button, Panel, PanelHeader, PanelHeaderBack, PanelHeaderContent ,Div} from '@vkontakte/vkui'; 
 
import kgu from '../img/kgu.jfif'; //'../img/название вуза с маленькой буквы.jpg'является названием картинки 
import './Kgu.css'; //название вашего вуза, с расширением css.  
const handleClick1 = async () => {
	try {
	await bridge.send('VKWebAppJoinGroup', { group_id: 137765556 });
	console.log('Подписка выполнена успешно!');
	} catch (error) {
	console.log('Ошибка подписки: ', error);
	}
}; 
 
const Kgu= props => ( //название вашего вуза с большой буквы 
 <Panel id={props.id}> 
  <PanelHeader 
   before={<PanelHeaderBack onClick={props.go} data-to="krasnodar"/>} // Влад оставляет persik(Москва), Веталь пишет piter(Питер), Кирилл пишет rost(для вузов Ростова), novosib(для вузов Новосибирска), Руслан пишет krasnodar(для Краснодара) очень прошу не менять названия, это важно для кода. Регистр также учитывается 
  > 
   Кубанский государственный Университет  
  </PanelHeader>  
  <img className="Kgu" src={kgu} alt="Persik The Cat"/>  
  <Div> 
   <h1>Кубанский государственный Университет</h1>  
   <p>Вуз классического университетского образования, в котором гармонично сочетаются естественно-научные и гуманитарные направления.</p>  
   <h3>Информация о приемной комиссии</h3> 
   <p><b>Адрес:</b> г. Краснодар, ул. Ставропольская, 149, ауд. 134 </p>
   <p><b>Телефон приемной комиссии:</b> (8-861) 219-95-30 </p>
   <p><b>Электронная почта:</b> abitur@kubsu.ru </p>
  </Div> 
  <Button variant="contained" color="primary" onClick={handleClick1}>
		Подписаться
    </Button>
 </Panel> 
 
); 
 
Kgu.propTypes = { // название вашего вуза с большой буквы 
 id: PropTypes.string.isRequired, 
 go: PropTypes.func.isRequired, 
}; 
 
export default Kgu; // название вашего вуза с большой буквы
