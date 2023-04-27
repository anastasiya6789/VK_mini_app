import React from 'react'; 
import PropTypes from 'prop-types'; 
import bridge from '@vkontakte/vk-bridge';
 
import { Button, Panel, PanelHeader, PanelHeaderBack, PanelHeaderContent ,Div} from '@vkontakte/vkui'; 
 
import  spnr from '../img/spnr.jfif'; 
import './Spnr.css'; 
const handleClick1 = async () => {
	try {
	await bridge.send('VKWebAppJoinGroup', { group_id: 94 });
	console.log('Подписка выполнена успешно!');
	} catch (error) {
	console.log('Ошибка подписки: ', error);
	}
};
 
const Spnr= props => ( 
 <Panel id={props.id}> 
  <PanelHeader 
   before={<PanelHeaderBack onClick={props.go} data-to="piter"/>} 
  > 
  Санкт-Петербургский национальный исследовательский университет информационных технологий, механики и оптики
  </PanelHeader>  
  <img className="Spnr" src={spnr} alt="Persik The Cat"/> 
  <Div> 
    <h1>Санкт-Петербургский национальный исследовательский университет информационных технологий, механики и оптики</h1>
    <p>Университет ИТМО — это больше, чем университет. Гармоничное развитие личности студента в Университете ИТМО обеспечивается за счёт индивидуальных траекторий обучения, выстраиваемых на базе интеграции основной образовательной деятельности (основные программы бакалавриата, магистратуры, аспирантуры), дополнительного образования (онлайн-курсы, ДПО) и внеучебной деятельности (система студенческих клубов — наука, творчество, спорт, социальная активность).</p>  
    <p>Команда университета поликультурна и многочисленна. В Университете ИТМО приветствуют молодых специалистов, учёных, преподавателей, способных и готовых менять к лучшему университет и мир вокруг. Университет ИТМО всегда удивляет научно-популярными яркими мероприятиями и масштабными open-air, где строят города будущего и "умные дома".</p>  
    <h3>Информация о приемной комиссии</h3> 
   	<p><b>Адрес:</b>г. Санкт-Петербург, Кронверкский проспект, д.49, лит А, ауд. 1101</p>
   	<p><b>Телефон приемной комиссии:</b> +7 (812) 480-04-80</p>
   	<p><b>Электронная почта:</b>abit@itmo.ru</p>  
  </Div> 
  <Button variant="contained" color="primary" onClick={handleClick1}>
		Подписаться
    </Button>
 </Panel> 
 
); 
 
Spnr.propTypes = { 
 id: PropTypes.string.isRequired, 
 go: PropTypes.func.isRequired, 
}; 
 
export default Spnr;
