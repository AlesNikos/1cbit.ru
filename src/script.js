
$(document).ready(function() {
    
    $('.header .burger').on('click', function(){
        $(this).parents('.header').toggleClass('opened');
        $('body').toggleClass('overflow');
    });
    
    $('.custom-input, .custom-select').styler();
    
    $('.custom-input input').on('focusout', function(){
        $(this).val() != '' ? $(this).addClass('filled') : $(this).removeClass('filled')
    })
    
    $("body").on('click', '.accordion-head > a', function () {
        $(this).parent().find(".accordion-body").toggleClass('active');
        $(this).parent().toggleClass('opened');
    });

    var $tabs = function (target) {
        var
            _elemTabs = (typeof target === 'string' ? document.querySelector(target) : target),
            _eventTabsShow,
            _showTab = function (tabsLinkTarget) {
                var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
                tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
                tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.tabs__link_active');
                tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.tabs__pane_show');
                // если следующая вкладка равна активной, то завершаем работу
                if (tabsLinkTarget === tabsLinkActive) {
                    return;
                }
                // удаляем классы у текущих активных элементов
                if (tabsLinkActive !== null) {
                    tabsLinkActive.classList.remove('tabs__link_active');
                }
                if (tabsPaneShow !== null) {
                    tabsPaneShow.classList.remove('tabs__pane_show');
                }
                // добавляем классы к элементам (в завимости от выбранной вкладки)
                tabsLinkTarget.classList.add('tabs__link_active');
                tabsPaneTarget.classList.add('tabs__pane_show');
                document.dispatchEvent(_eventTabsShow);
            },
            _switchTabTo = function (tabsLinkIndex) {
                var tabsLinks = _elemTabs.querySelectorAll('.tabs__link');
                if (tabsLinks.length > 0) {
                    if (tabsLinkIndex > tabsLinks.length) {
                        tabsLinkIndex = tabsLinks.length;
                    } else if (tabsLinkIndex < 1) {
                        tabsLinkIndex = 1;
                    }
                    _showTab(tabsLinks[tabsLinkIndex - 1]);
                }
            };

        _eventTabsShow = new CustomEvent('tab.show', {
            detail: _elemTabs
        });

        _elemTabs.addEventListener('click', function (e) {
            var tabsLinkTarget = e.target;
            // завершаем выполнение функции, если кликнули не по ссылке
            if (!tabsLinkTarget.classList.contains('tabs__link')) {
                return;
            }
            // отменяем стандартное действие
            e.preventDefault();
            _showTab(tabsLinkTarget);
        });

        return {
            showTab: function (target) {
                _showTab(target);
            },
            switchTabTo: function (index) {
                _switchTabTo(index);
            }
        }

    };

    if ($('.tabs').length > 0) {
        
        $tabs('.tabs');

    }


    $('.custom-input input, .custom-input textarea').on('focusout', function () {
        $(this).val() != '' ? $(this).addClass('filled') : $(this).removeClass('filled')
    })

    $("input[type=file]").on('change', function () {
        var fileName = this.files[0].name;
        $(this).parent().addClass('loaded');
        $(this).siblings('label').text(fileName);
    });
    $(".uploader-delete").on('click', function () {
        $(this).siblings('input[type=file]').val('');
        $(this).siblings('.uploader-text').text('прикрепить файл');
        $(this).parent().removeClass('loaded');
    })

    $(".searchbar-input input").on('keyup', function () {
        if ($(this).val().length > 0) {
            $(this).parents('.searchbar-input').addClass('filled');
        }
        else {
            $(this).parents('.searchbar-input').removeClass('filled');
        }
    });

    $("body").on('click', $('.searchbar-input.filled .search-button'), function () {
        $('.searchbar-input.filled .search-button').siblings('input').val('');
        $('.searchbar-input').removeClass('filled');
    });

    $(".uploader-delete").on('click', function () {
        $(this).siblings('input[type=file]').val('');
        $(this).siblings('.uploader-text').text('прикрепить файл');
        $(this).parent().removeClass('loaded');
    })

    

});

$('.scrollbar-inner').scrollbar();

function openModal() {
    $('.popup').jqmHide();
    $('body').removeClass('overflow');
    jqmPopup('popup', 'html/popup/popup.html', true);
};