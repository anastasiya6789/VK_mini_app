import React from 'react'; 
import PropTypes from 'prop-types'; 
import bridge from '@vkontakte/vk-bridge';
 
import { Button, Panel, PanelHeader, PanelHeaderBack, PanelHeaderContent ,Div} from '@vkontakte/vkui'; 
 
import spbg from '../img/spbg.jfif';  
import './Spbg.css';
const handleClick1 = async () => {
	try {
	await bridge.send('VKWebAppJoinGroup', { group_id: 41638345 });
	console.log('Подписка выполнена успешно!');
	} catch (error) {
	console.log('Ошибка подписки: ', error);
	}
};
 
const Spbg= props => ( 
 <Panel id={props.id}> 
  <PanelHeader 
   before={<PanelHeaderBack onClick={props.go} data-to="piter"/>} 
  > 
   Санкт-Петербургский государственный экономический университет 
  </PanelHeader>  
  <img className="Spbg" src={spbg} alt="Persik The Cat"/> 
  <Div> 
   <h1>Санкт-Петербургский государственный экономический университет</h1>  
   <p>Санкт-Петербургский государственный экономический университет является унитарной некоммерческой организацией, созданной для осуществления образовательных, научных, социальных и культурных функций.</p> 
   <p>Сегодня в стенах экономического университета обучается около 15 000 обучающихся, более 618 — аспирантов и докторантов, 928 — иностранных студентов. Университет имеет 3 филиала, 15 учебных корпусов, 8 факультетов и 52 кафедры. В СПбГЭУ работает 2 420 сотрудников, в том числе профессорско-преподавательский состав — 978 человек.</p>
   <h3>Информация о приемной комиссии</h3> 
   	<p><b>Адрес:</b>г. Санкт-Петербург, наб. канала Грибоедова, 30-32, литер А, 1 этаж </p>
   	<p><b>Телефон приемной комиссии:</b>(812) 458-97-58 </p>
   	<p><b>Электронная почта:</b> abitura@unecon.ru</p>  
  </Div> 
  <Button variant="contained" color="primary" onClick={handleClick1}>
		Подписаться
    </Button>
 </Panel> 
 
); 
 
Spbg.propTypes = {  
 id: PropTypes.string.isRequired, 
 go: PropTypes.func.isRequired, 
}; 
 
export default Spbg; 
