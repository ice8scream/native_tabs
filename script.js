window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let tabs = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
        
    tabContent.forEach(function(item, index){
        if(index != 0){
            item.classList.add('hide');
        }else {
            item.classList.add('show');
        }
    });

    function tabsFade(currenTab) {
        tabContent.forEach(function(item, index){
            if(index == currenTab){
                if(item.classList.contains('hide')){
                    item.classList.remove('hide');
                    item.classList.add('show');
                }
            } else {
                if(item.classList.contains('show')){
                    item.classList.remove('show');
                    item.classList.add('hide');
                }

            }
        });
    }

    function getCurrentTab(element){
        let currenTab;
        for(currenTab = 0; currenTab < tabs.length; currenTab++){
            if(tabs[currenTab] === element){
                break;
            }
        }
        tabsFade(currenTab);
    }

    info.addEventListener('click', function(event){
        if(event.target.classList.contains('info-header-tab')){
            getCurrentTab(event.target);
        }  
    });
});