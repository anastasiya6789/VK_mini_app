import React from 'react'; 
import PropTypes from 'prop-types'; 
import bridge from '@vkontakte/vk-bridge';
 
import { Button, Panel, PanelHeader, PanelHeaderBack, PanelHeaderContent ,Div} from '@vkontakte/vkui'; 
 
import spmu from '../img/spmu.jfif'; 
import './Spmu.css';  
const handleClick1 = async () => {
	try {
	await bridge.send('VKWebAppJoinGroup', { group_id: 17835 });
	console.log('Подписка выполнена успешно!');
	} catch (error) {
	console.log('Ошибка подписки: ', error);
	}
};
 
const Spmu= props => ( 
 <Panel id={props.id}> 
  <PanelHeader 
   before={<PanelHeaderBack onClick={props.go} data-to="piter"/>} 
  > 
    Санкт-Петербургский Горный университет
  </PanelHeader>  
  <img className="Spmu" src={spmu} alt="Persik The Cat"/> 
  <Div> 
   <h1> Санкт-Петербургский Горный университет</h1> 
   <p>Сегодня Горный университет реализует все уровни высшего профессионального образования с присвоением квалификации бакалавр, магистр, дипломированный специалист для крупнейших российских и зарубежных компаний.</p> 
   <p>Выпускники Вуза занимаются прогнозом, поисками, разведкой, разработкой и переработкой важнейших видов полезных ископаемых — нефти, газа, руд благородных, цветных и редких металлов, алмазов, драгоценных камней.</p> 
   <h3>Информация о приемной комиссии</h3> 
   	<p><b>Адрес:</b>Санкт-Петербург, наб. Лейтенанта Шмидта, д. 45, Главный вход в Университет</p>
   	<p><b>Телефон приемной комиссии:</b> 8 800 550 14 34</p>
   	<p><b>Электронная почта:</b>priem@spmi.ru</p>  
  </Div> 
  <Button variant="contained" color="primary" onClick={handleClick1}>
		Подписаться
    </Button>
 </Panel> 
 
); 
 
Spmu.propTypes = { 
 id: PropTypes.string.isRequired, 
 go: PropTypes.func.isRequired, 
}; 
 
export default Spmu;
