import React from 'react'; 
import PropTypes from 'prop-types'; 
import bridge from '@vkontakte/vk-bridge';
 
import { Button, Panel, PanelHeader, PanelHeaderBack, PanelHeaderContent, Div} from '@vkontakte/vkui'; 
 
import ranhigs from '../img/ranhigs.png';  
import './Ranhigs.css';   
const handleClick1 = async () => {
	try {
	await bridge.send('VKWebAppJoinGroup', { group_id: 44700815 });
	console.log('Подписка выполнена успешно!');
	} catch (error) {
	console.log('Ошибка подписки: ', error);
	}
};
 
const Ranhigs= props => (  
 <Panel id={props.id}> 
  <PanelHeader 
   before={<PanelHeaderBack onClick={props.go} data-to="moscow"/>}  
  > 
   ИОМ РАНХиГС  
  </PanelHeader>  
  <img className="Ranhigs" src={ranhigs} alt="Persik The Cat"/>  
  <Div> 
   <h1>ИОМ РАНХиГС</h1>  
   <p>Главная задача Института отраслевого менеджмента Российской академии народного хозяйства и государственной службы при Президенте РФ (ИОМ РАНХиГС) — подготовка высококвалифицированных кадров для ведущих отраслей российской экономики, государственной службы и бизнеса.</p>  
   <p>Это единственный полностью практико-ориентированный институт Академии. С первых занятий студенты погружаются в атмосферу реального рынка.</p>  
   <h3>Информация о приемной комиссии</h3> 
   	<p><b>Адрес:</b>г. Москва, проспект Вернадского, д. 82 </p>
   	<p><b>Телефон приемной комиссии:</b>+7 499 956-99-99 </p>
   	<p><b>Электронная почта:</b> iim@ranepa.ru</p>  
  </Div> 
  <Button variant="contained" color="primary" onClick={handleClick1}>
		Подписаться
    </Button>
 </Panel> 
 
); 
 
Ranhigs.propTypes = {  
 id: PropTypes.string.isRequired, 
 go: PropTypes.func.isRequired, 
}; 
 
export default Ranhigs; 
