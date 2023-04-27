import React from 'react'; 
import PropTypes from 'prop-types'; 
import bridge from '@vkontakte/vk-bridge';
 
import { Button, Panel, PanelHeader, PanelHeaderBack, PanelHeaderContent ,Div } from '@vkontakte/vkui'; 
 
import sppu from '../img/sppu.jfif'; 
import './Sppu.css';  
const handleClick1 = async () => {
	try {
	await bridge.send('VKWebAppJoinGroup', { group_id: 61195360 });
	console.log('Подписка выполнена успешно!');
	} catch (error) {
	console.log('Ошибка подписки: ', error);
	}
};
 
const Sppu= props => ( 
 <Panel id={props.id}> 
  <PanelHeader 
   before={<PanelHeaderBack onClick={props.go} data-to="piter"/>} 
  > 
   Санкт-Петербургский политехнический университет Петра Великого
  </PanelHeader>  
  <img className="Sppu" src={sppu} alt="Persik The Cat"/> 
  <Div> 
   <h1>Санкт-Петербургский политехнический университет Петра Великого</h1> 
   <p>Санкт-Петербургский политехнический университет Петра Великого - крупнейший технический вуз страны c исторически сложившимися сильнейшими научными школами, имеющий неоспоримые результаты и достижения в научной, образовательной и инновационной деятельности. Основываясь на ключевых мировых тенденциях развития сферы исследований, разработок, технологий и образования, к 2030 году стремится войти в сотню лучших университетов мира, встав в один ряд c лидерами мирового образования.</p> 
   <p>В этом году СПбПУ Петра Великого обновил концепцию приема. Концепция приема 2022/2023 - Мы знаем, что надо делать. Так, Политех показывает своим абитуриентам, что мы находимся в потоке информации и знаем, что нужно делать, чтобы стать успешным, добиться цели, готовы направлять студентов для того, чтобы быть в тренде.</p> 
   <h3>Информация о приемной комиссии</h3> 
   	<p><b>Адрес:</b>г. Санкт-Петербург, ул. Гидротехников, 5</p>
   	<p><b>Телефон приемной комиссии:</b> 8 (800) 707-18-99 </p>
   	<p><b>Электронная почта:</b>abitur@spbstu.ru</p>  
  </Div> 
  <Button variant="contained" color="primary" onClick={handleClick1}>
		Подписаться
    </Button>
 </Panel> 
 
); 
 
Sppu.propTypes = { 
 id: PropTypes.string.isRequired, 
 go: PropTypes.func.isRequired, 
}; 
 
export default Sppu;
