Проект создан с помощью [Vue CLI 3](https://cli.vuejs.org).
# Задание

Разработать SPA приложение - упрощенную версию главной страницы ресурса https://coincap.io/

В качестве фреймворка предпочтительнее использовать vue.js или react




часть 1:


В приложении существует основная страница, на которой расположен табличный компонент.

В нем необходимо реализовать вывод информации о названии, стоимости, рыночной капитализации и суточного объема для 15 криптовалют с наибольшей рыночной капитализацией.

Данные получаются через REST API (ссылка на документацию ниже) при загрузке страницы.

Верстка должна быть резиновая и адаптивная для мобилки и десктопа. 
Breakpoint можно выбрать самостоятельно.

В мобильной версии отображать только колонки с названием и стоимостью.

Желательно использовать правила именования по БЭМу.

В качестве сборщика приложения предпочтительнее Webpack.

Цвета и отступы можно использовать на свой вкус.


Документация по REST API: https://docs.coincap.io/



Таблица должна помещаться по вертикали на странице (без скрола на страница) и должна содержать свой скрол-бар.

Скролл в таблице должен появляться по ховеру на таблицу, сама таблица и ее контент должны оставаться на месте при этом.

Внешний вид скроллбара не принципиален. Таблица скроллится внутри, шапка остаётся на месте.
Полоса скролл бара начинается под шапкой. 
При скролле значения в таблице не должны наезжать на шапку.




часть 2 (не является обязательной, ее реализация будет преимуществом):


Обновлять в реальном времени (без перезагрузки страницы) данные о цене и объеме торгов для отображаемых криптовалют.

Информацию получать через WebSocket.

Документация по WebSocket: https://docs.coincap.io/

## Использованные библиотеки/фреймворки.

 - [Vuetify](https://vuetifyjs.com) - Хороший material design фреймворк, большой набор UI-компонентов, удобная grid-система, много вспомогательных классов.
 - [Vue Router](https://router.vuejs.org/) - официальная библиотека маршрутизации для Vue.js.
