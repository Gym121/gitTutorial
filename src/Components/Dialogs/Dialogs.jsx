import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';





const DialogItem = (props)=>{

  let path ='/dialogs/'+ props.id;

  return <div className={s.item}>
  <NavLink to={path}>{props.name}</NavLink>
</div>
}

const Message =(props) =>{
  return(
  <div className={s.dialog}>
  {props.message}
</div>
  )
}



const Dialogs = () => {
  let dialogsData=[
    {id: 1, name: 'Denis'},
    {id: 2, name: 'Danil'},
    {id: 3, name: 'Dima'},
    {id: 4, name: 'Pokahontas'},
    {id: 5, name: 'Daldal'}
  ]
let dialogsElement=dialogsData.map( element=><DialogItem id={element.id} name={element.name}/>);
/*let dialogsElement = [
  <DialogItem id={dialogsData[0].id} name={dialogsData[0].name}/>,
  <DialogItem id={dialogsData[1].id} name={dialogsData[1].name}/>,
  <DialogItem id={dialogsData[2].id} name={dialogsData[2].name}/>,
  <DialogItem id={dialogsData[3].id} name={dialogsData[3].name}/>,
  <DialogItem id={dialogsData[4].id} name={dialogsData[4].name}/>
]*/

  let messagesData=[
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'No,it is bad'},
    {id: 4, message: 'text'},
    {id: 5, message: 'text'}
  ]

  let messagesElement=messagesData.map( element=><Message message={element.message}/>);

  return (
    <div className='P'>
      <div className={s.Ds}>
        <div className={s.One}>
        {dialogsElement}
        </div>
        <div className={s.Two}>
     <div>

     <div id="subscribe-button" class="style-scope ytd-watch-metadata"><ytd-button-renderer class="style-scope ytd-watch-metadata style-destructive size-default" use-keyboard-focused="" button-renderer="true" is-paper-button=""><a class="yt-simple-endpoint style-scope ytd-button-renderer" tabindex="-1"><tp-yt-paper-button id="button" class="style-scope ytd-button-renderer style-destructive size-default" style-target="host" role="button" tabindex="0" animated="" elevation="0" aria-disabled="false" aria-label="Подписаться"><!--css-build:shady--><yt-formatted-string id="text" class="style-scope ytd-button-renderer style-destructive size-default">Подписаться</yt-formatted-string><paper-ripple class="style-scope tp-yt-paper-button"><!--css-build:shady-->
    

    <div id="background" class="style-scope paper-ripple"></div>
    <div id="waves" class="style-scope paper-ripple"></div>
</paper-ripple></tp-yt-paper-button></a></ytd-button-renderer></div>
<a class="yt-simple-endpoint style-scope ytd-button-renderer" tabindex="-1"><tp-yt-paper-button id="button" class="style-scope ytd-button-renderer style-destructive size-default" style-target="host" role="button" tabindex="0" animated="" elevation="0" aria-disabled="false" aria-label="Подписаться"><!--css-build:shady--><yt-formatted-string id="text" class="style-scope ytd-button-renderer style-destructive size-default">Подписаться</yt-formatted-string><paper-ripple class="style-scope tp-yt-paper-button"><!--css-build:shady-->
    

    <div id="background" class="style-scope paper-ripple"></div>
    <div id="waves" class="style-scope paper-ripple"></div>
</paper-ripple></tp-yt-paper-button></a>
<tp-yt-paper-button id="button" class="style-scope ytd-button-renderer style-destructive size-default" style-target="host" role="button" tabindex="0" animated="" elevation="0" aria-disabled="false" aria-label="Подписаться"><!--css-build:shady--><yt-formatted-string id="text" class="style-scope ytd-button-renderer style-destructive size-default">Подписаться</yt-formatted-string><paper-ripple class="style-scope tp-yt-paper-button"><!--css-build:shady-->
    

    <div id="background" class="style-scope paper-ripple"></div>
    <div id="waves" class="style-scope paper-ripple"></div>
</paper-ripple></tp-yt-paper-button>
<yt-formatted-string id="text" class="style-scope ytd-button-renderer style-destructive size-default">Подписаться</yt-formatted-string>
<paper-ripple class="style-scope tp-yt-paper-button"><!--css-build:shady-->
    

    <div id="background" class="style-scope paper-ripple"></div>
    <div id="waves" class="style-scope paper-ripple"></div>
</paper-ripple>
<tp-yt-paper-button id="button" class="style-scope ytd-button-renderer style-destructive size-default" style-target="host" role="button" tabindex="0" animated="" elevation="0" aria-disabled="false" aria-label="Подписаться"><!--css-build:shady--><yt-formatted-string id="text" class="style-scope ytd-button-renderer style-destructive size-default">Подписаться</yt-formatted-string><paper-ripple class="style-scope tp-yt-paper-button"><!--css-build:shady-->
    

    <div id="background" class="style-scope paper-ripple"></div>
    <div id="waves" class="style-scope paper-ripple"></div>
</paper-ripple></tp-yt-paper-button>
<a class="yt-simple-endpoint style-scope ytd-button-renderer" tabindex="-1"><tp-yt-paper-button id="button" class="style-scope ytd-button-renderer style-destructive size-default" style-target="host" role="button" tabindex="0" animated="" elevation="0" aria-disabled="false" aria-label="Подписаться"><!--css-build:shady--><yt-formatted-string id="text" class="style-scope ytd-button-renderer style-destructive size-default">Подписаться</yt-formatted-string><paper-ripple class="style-scope tp-yt-paper-button"><!--css-build:shady-->
    

    <div id="background" class="style-scope paper-ripple"></div>
    <div id="waves" class="style-scope paper-ripple"></div>
</paper-ripple></tp-yt-paper-button></a>
<ytd-button-renderer class="style-scope ytd-watch-metadata style-destructive size-default" use-keyboard-focused="" button-renderer="true" is-paper-button=""><a class="yt-simple-endpoint style-scope ytd-button-renderer" tabindex="-1"><tp-yt-paper-button id="button" class="style-scope ytd-button-renderer style-destructive size-default" style-target="host" role="button" tabindex="0" animated="" elevation="0" aria-disabled="false" aria-label="Подписаться"><!--css-build:shady--><yt-formatted-string id="text" class="style-scope ytd-button-renderer style-destructive size-default">Подписаться</yt-formatted-string><paper-ripple class="style-scope tp-yt-paper-button"><!--css-build:shady-->
    

    <div id="background" class="style-scope paper-ripple"></div>
    <div id="waves" class="style-scope paper-ripple"></div>
</paper-ripple></tp-yt-paper-button></a></ytd-button-renderer>
<div id="subscribe-button" class="style-scope ytd-watch-metadata"><ytd-button-renderer class="style-scope ytd-watch-metadata style-destructive size-default" use-keyboard-focused="" button-renderer="true" is-paper-button=""><a class="yt-simple-endpoint style-scope ytd-button-renderer" tabindex="-1"><tp-yt-paper-button id="button" class="style-scope ytd-button-renderer style-destructive size-default" style-target="host" role="button" tabindex="0" animated="" elevation="0" aria-disabled="false" aria-label="Подписаться"><!--css-build:shady--><yt-formatted-string id="text" class="style-scope ytd-button-renderer style-destructive size-default">Подписаться</yt-formatted-string><paper-ripple class="style-scope tp-yt-paper-button"><!--css-build:shady-->
    

    <div id="background" class="style-scope paper-ripple"></div>
    <div id="waves" class="style-scope paper-ripple"></div>
</paper-ripple></tp-yt-paper-button></a></ytd-button-renderer></div>


     </div>
        {messagesElement}
        </div>
      </div>
    </div>
  );
}

export default Dialogs;



