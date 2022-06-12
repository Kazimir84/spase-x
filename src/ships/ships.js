// є API от SpaceX
// https://api.spacexdata.com/v3/launches/
// потрібно вивести всі запуски кораблів окрім 2020 року
// репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)
// https://github.com/GrayHead/js_demos/blob/master/react/lesson1/cw/img.png

import React from "react";

fetch('https://api.spacexdata.com/v3/launches/')
    .then(resolve => resolve.json())
    .then(resault => {
        for (let i = 0; i < resault.length; i++) {
            let element = resault[i];
            if (element.launch_year !== '2020') {
                let div = document.createElement('div');
                    div.className="divStyle";
                let ol = document.createElement('ol');
                    ol.style = `
                    display: contents;
                    `;
                let olWrapper = document.getElementsByClassName('wrapperOl');
                let liName = document.createElement('li');
                let liLaunch = document.createElement('li');
                let liMission = document.createElement('div');
                let img = document.createElement('img');

                liName.style = `
                                            display: flex;
                                            justify-content: center;
                `;
                liLaunch.style = `
                                            display: flex;
                                            justify-content: center;
                `;
                liMission.style = `
                                            display: flex;
                                            justify-content: center;
                `;

                div.append(ol);
                olWrapper[0].append(div);
                liMission.append(img);
                ol.append(liName);
                ol.append(liLaunch);
                ol.append(liMission);

                liName.innerText = `Mission Name: ${element.mission_name}`;
                liLaunch.innerText = `Launch Year: ${element.launch_year}`;
                img.src = `${element.links.mission_patch_small}`;
            };
        };
    });

// export default task;