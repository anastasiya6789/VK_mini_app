import React from 'react'; 
import PropTypes from 'prop-types'; 
import bridge from '@vkontakte/vk-bridge';
 
import { Button, Div, Panel, PanelHeader, PanelHeaderBack, PanelHeaderContent } from '@vkontakte/vkui'; 
 
import kgik from '../img/kgik.jfif'; //'../img/название вуза с маленькой буквы.jpg'является названием картинки 
import './Kgik.css'; //название вашего вуза, с расширением css.  
const handleClick1 = async () => {
	try {
	await bridge.send('VKWebAppJoinGroup', { group_id: 155819863 });
	console.log('Подписка выполнена успешно!');
	} catch (error) {
	console.log('Ошибка подписки: ', error);
	}
}; 
 
const Kgik= props => ( //название вашего вуза с большой буквы 
 <Panel id={props.id}> 
  <PanelHeader 
   before={<PanelHeaderBack onClick={props.go} data-to="krasnodar"/>} // Влад оставляет persik(Москва), Веталь пишет piter(Питер), Кирилл пишет rost(для вузов Ростова), novosib(для вузов Новосибирска), Руслан пишет krasnodar(для Краснодара) очень прошу не менять названия, это важно для кода. Регистр также учитывается 
  > 
   Краснодарский государственный институт культуры  
  </PanelHeader>  
  <img className="Kgik" src={kgik} alt="Persik The Cat"/>  
  <Div> 
   <h1>Краснодарский государственный институт культуры</h1>  
   <p>Краснодарский государственный институт культуры образован в 1966 году. Это ведущий комплекс Юга России по подготовке специалистов в сфере культуры и искусства, один из крупнейших научных центров в области культурологии, народного художественного творчества и социально-культурной деятельности.</p>  
   <h3>Информация о приемной комиссии</h3> 
   <p><b>Адрес:</b>Краснодарский край, г. Краснодар, ул. им. 40-летия Победы, д. 33, 2-й учебный корпус, кабинет № 223</p>
   <p><b>Телефон приемной комиссии:</b> 8 (861) 257-76-28 </p>
   <p><b>Электронная почта:</b> kguki@list.ru</p>
  </Div> 
  <Button variant="contained" color="primary" onClick={handleClick1}>
		Подписаться
    </Button>
 </Panel> 
 
); 
 
Kgik.propTypes = { // название вашего вуза с большой буквы 
 id: PropTypes.string.isRequired, 
 go: PropTypes.func.isRequired, 
}; 
 
export default Kgik; // название вашего вуза с большой буквы
