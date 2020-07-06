/*==============================================================
    pull menu
 ==============================================================*/

function bindEvent(el, eventName, eventHandler) {
    if (el.addEventListener) {
        el.addEventListener(eventName, eventHandler, false);
    } else if (el.attachEvent) {
        el.attachEvent('on' + eventName, eventHandler);
    }
}

(function () {
    var divEl = document.getElementById('root'),
        openbtn = document.getElementById('open-button'),
        closebtn = document.getElementById('close-button'),
        isOpen = true;
    console.log(openbtn)
    function init() {
        initEvents();
    }

    function initEvents() {
        if (openbtn) {
            bindEvent(openbtn, 'click', toggleMenu);

        }
        if (closebtn) {
            bindEvent(closebtn, 'click', toggleMenu);
        }

        // close the menu element if the target itÂ´s not the menu element or one of its descendants..
    }

    function toggleMenu() {
        if (isOpen) {
            classie.remove(divEl, 'show-menu');
            if ($(".full-width-pull-menu").length) {
                classie.remove(divEl, 'overflow-hidden');
                classie.remove(divEl, 'position-fixed');
            }
        }
        else {
            classie.add(divEl, 'show-menu');
            if ($(".full-width-pull-menu").length) {
                classie.add(bodyEl, 'overflow-hidden');
                classie.add(bodyEl, 'position-fixed');
            }

        }
        isOpen = !isOpen;
    }

    init();

})();