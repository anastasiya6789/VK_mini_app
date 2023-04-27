import React from 'react'; 
import PropTypes from 'prop-types'; 
import bridge from '@vkontakte/vk-bridge';
 
import { Button, Panel, PanelHeader, PanelHeaderBack, PanelHeaderContent ,Div} from '@vkontakte/vkui'; 
 
import kgau from '../img/kgau.jfif'; //'../img/название вуза с маленькой буквы.jpg'является названием картинки 
import './Kgau.css'; //название вашего вуза, с расширением css.  
const handleClick1 = async () => {
	try {
	await bridge.send('VKWebAppJoinGroup', { group_id: 4255762 });
	console.log('Подписка выполнена успешно!');
	} catch (error) {
	console.log('Ошибка подписки: ', error);
	}
}; 
 
const Kgau= props => ( //название вашего вуза с большой буквы 
 <Panel id={props.id}> 
  <PanelHeader 
   before={<PanelHeaderBack onClick={props.go} data-to="krasnodar"/>} // Влад оставляет persik(Москва), Веталь пишет piter(Питер), Кирилл пишет rost(для вузов Ростова), novosib(для вузов Новосибирска), Руслан пишет krasnodar(для Краснодара) очень прошу не менять названия, это важно для кода. Регистр также учитывается 
  > 
   Кубанский государственный Аграрный Университет  
  </PanelHeader>  
  <img className="Kgau" src={kgau} alt="Persik The Cat"/>  
  <Div> 
   <h1>Кубанский государственный Аграрный Университет</h1>  
   <p>Кубанский госагроуниверситет — вуз с богатейшей историей, прогрессивным настоящим и надежным будущим. Традиции, заложенные преподавателями и студентами нескольких поколений, являются незыблемой основой для его развития. </p>  
   <h3>Информация о приемной комиссии</h3> 
   <p><b>Адрес:</b>г.Краснодар, ул. Калинина, 13 корп. зооинженерного факультета, каб.: 121, 122</p>
   <p><b>Телефон приемной комиссии:</b> +7 (861) 221-58-18, +7 (861) 221–52-39, +7 (861) 221-54-76 </p>
   <p><b>Электронная почта:</b> pk@kubsau.ru</p>

  </Div> 
  <Button variant="contained" color="primary" onClick={handleClick1}>
		Подписаться
    </Button>
 </Panel> 
 
); 
 
Kgau.propTypes = {  
 id: PropTypes.string.isRequired, 
 go: PropTypes.func.isRequired, 
}; 
 
export default Kgau; 
