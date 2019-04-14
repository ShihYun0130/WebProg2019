import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import road from './road.png';
import caticon from './caticon.png';
import search from './search.png';
import cat from './cat.png';
import kitchen from './kitchen.png';
import door from './door.png';

export default class Posts extends Component {
    render() {
				const articles = [
					[cat, 'cat', '字體，是網頁排版中最重要的元素之一，本篇文章將會針對 CSS 的 font-family 進行詳細介紹 ( 包含 generic-family、font-face、unicode...等 )，希望幫助...'],
					[kitchen, 'kitchen', '隨著 CSS3 的普及，過去許多看似酷炫的效果，逐漸也都能透過 CSS 來實作，這篇文章將會針對 CSS 動畫進行完整的使用探討，從基礎的使用，一直到 JavaScript 的操作方法都會介紹，希望能...'],
					[cat, 'cats leg', '對於繪圖和印刷而言，「單位」很相當重要的，然而在網頁排版裡，單位也是同樣具有重要性，在 CSS3 普及以來，更支援了一些方便好用的單位 ( px、em、rem...等 )，這篇文章將整理這些常用的 C...'],
					[kitchen, 'friend', '對於繪圖和印刷而言，「單位」很相當重要的，然而在網頁排版裡，單位也是同樣具有重要性，在 CSS3 普及以來，更支援了一些方便好用的單位 ( px、em、rem...等 )，這篇文章將整理這些常用的 C...'],
					[cat, 'meal', '雖然我們能用 CSS 操控由於偽元素，但因為偽元素不存在於網頁元素內，所以無法透過 JavaScript 正規操控 DOM 的方式來修改或控制，不過 JavaScript 身為一個神通廣大的程式語言...'],
					[kitchen, 'door', '認識了正四面體與正六面體，接著我們要用同樣的方法，來製作正八面體與正十二面體，這兩個正多面體雖然組合的面比較多，不過因為具備了對稱性，所以只需要製作出一半的結構，另外一半再用反轉的方式接在一起即可。']
				]
				const images = [ door, door, door, door, door, door, door, door ];
        return (
              <div className="body">
                <div className="welcome">
                    <div className="welcomeText">hello world</div>
                    <hr className="line" />
                    <div className="sentence"> Always Do What You Are Afraid To DO </div>
                    <button className="learnMore">Welcome</button>
                </div>
                <img src={road} className="road"/> */}

                <div className="blog">

                    {articles.map(
                    e => <div className="article"> 
                    <div className="picture"> 
                    <img src={(e[0])} alt={e[0]} /></div> 
                    <div className="topic">{e[1]}</div>
                    <hr className="artline" />
                    <div className="shortArticle">{e[2]}</div>
                    </div>) 
                    }
                    
                </div>

                <div className="quote">
                    <p>"We must be willing to let go of the life we planned so as to have the life that is waiting for us."
                    <br/> --Joseph Campbell</p>
                </div>

                <div className="introduction">
                    <img src={caticon} alt="me" />
                    <p className="aboutMe">About Me</p>
                    <p>Nunc lacinia non metus sed fermentum Quisque accumsan lacus id lacus egestas, 
                    eget ommodo augue rutrum. 
                    Nullam vitae felis vel leo venenatis faucibus sed quis felis. 
                    Pellentesque venenatis eu justo in gravida. 
                    Mauris iaculis porttitor posuere. 
                    Phasellus molestie magna non est bibendum non venenatis nisl tempor. 
                    Suspendisse dictum giatrent nisl urekgot dapibus. 
                    Mauris iaculis porttitor posuere. 
                    Phasellus molestie magna non est bibendum non venenatis nisltempor. 
                    Pellentesque venenatis eu justo in gravida. 
                    Quisque accumsan lacus id lacus egestas, eget commodo augue rutrum. 
                    Quisque accumsan lacus id lacus egestas, eget commodo augue rutrum. 
                    Suspendisse dictum giatrent nisl urekgot dapibus.<br/><br/>
                    Pellentesque suscipit lobortis mi sed volutpat. Vestibulum eget maximus urna. 
                    Nunc pellentesque lacinia diam ut eleifend. Nulla rhoncus faucibus sem a semper. 
                    Phasellus a mollis lacus. Cum sociis natoque penatibus et magnis dis parturient montes, 
                    nascetur ridiculus mus. Curabitur est. Like the tranquility you feel at the shore of a quiet lake or inside a beautiful cathedral.
                    </p>
                </div>
                
                
                <div className="gallery">
                    <div className="galleryText"> Gallery: Poems without words </div>
                    <div className="images">
                    {images.map( e => <div className="image"><img src={e} alt="" /></div>)}
                    </div>
                </div>

                <div className="footer">
                    <div className="recent">
                    <div className="recentPostText">Recent Posts</div>
                    <ul className="recentPost">
                        <li className="articleLink">Without music, life would be a mistake.</li>
                        <li className="articleLink">Without music, life would be a mistake.</li>
                        <li className="articleLink">Without music, life would be a mistake.</li>
                        <li className="articleLink">Without music, life would be a mistake.</li>
                        <li className="articleLink">Without music, life would be a mistake.</li>
                        <li className="articleLink">Without music, life would be a mistake.</li>
                    </ul>
                    </div>
                    <div className="other">
                    <div className="searchText"> Search </div>
                    <div className="search">
                        <input className="searchInput" placeholder="Search"/>
                        <img src={search} alt="" />
                    </div>
                    <div className="author">
                        <div> Author </div>
                        <div> Shih Yun Chen </div>
                    </div>
                    </div>
                </div>
            	</div>
        );
    }
}

