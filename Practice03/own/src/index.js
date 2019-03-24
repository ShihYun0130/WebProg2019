import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import cat from './cat.png';
import kitchen from './kitchen.png';
import App from './App';
import * as serviceWorker from './serviceWorker';

const bars = [ 'Home', 'Articles', 'Contact' ];
const articles = [
    [cat, 'cat', '字體，是網頁排版中最重要的元素之一，本篇文章將會針對 CSS 的 font-family 進行詳細介紹 ( 包含 generic-family、font-face、unicode...等 )，希望幫助...'],
    [kitchen, 'kitchen', '隨著 CSS3 的普及，過去許多看似酷炫的效果，逐漸也都能透過 CSS 來實作，這篇文章將會針對 CSS 動畫進行完整的使用探討，從基礎的使用，一直到 JavaScript 的操作方法都會介紹，希望能...'],
    [cat, 'cats leg', '對於繪圖和印刷而言，「單位」很相當重要的，然而在網頁排版裡，單位也是同樣具有重要性，在 CSS3 普及以來，更支援了一些方便好用的單位 ( px、em、rem...等 )，這篇文章將整理這些常用的 C...'],
    [kitchen, 'friend', '對於繪圖和印刷而言，「單位」很相當重要的，然而在網頁排版裡，單位也是同樣具有重要性，在 CSS3 普及以來，更支援了一些方便好用的單位 ( px、em、rem...等 )，這篇文章將整理這些常用的 C...'],
    [cat, 'meal', '雖然我們能用 CSS 操控由於偽元素，但因為偽元素不存在於網頁元素內，所以無法透過 JavaScript 正規操控 DOM 的方式來修改或控制，不過 JavaScript 身為一個神通廣大的程式語言...'],
    [kitchen, 'door', '認識了正四面體與正六面體，接著我們要用同樣的方法，來製作正八面體與正十二面體，這兩個正多面體雖然組合的面比較多，不過因為具備了對稱性，所以只需要製作出一半的結構，另外一半再用反轉的方式接在一起即可。']
]

ReactDOM.render(< App bars = {bars} articles = {articles} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
