document.addEventListener('DOMContentLoaded', function () {
    const welcomeToggle = document.getElementById('welcome-toggle');
    const dropDownPage = document.querySelector('.drop-down-page');
    const pageNavigation = document.querySelector('.page-navigation');
    const startTabId = 'tab-1';
    const state = {
        activeTab: {
            tabId: null,
            titleElement: null,
            contentElement: null,
        },
    };

    function toggleDropDown() {
        dropDownPage.classList.toggle('open', welcomeToggle.checked);
    }

    welcomeToggle.addEventListener('change', toggleDropDown);
    toggleDropDown();

    function handleTabSwitch(selectedTabId) {
        if (state.activeTab.tabId === selectedTabId) return;

        const { titleElement: prevTitle, contentElement: prevContent } = state.activeTab;
        if (prevTitle) prevTitle.classList.remove('active');
        if (prevContent) prevContent.classList.remove('active');

        const newTitle = document.querySelector(`label[for="${selectedTabId}"]`);
        const newContent = document.getElementById(`${selectedTabId}-content`);

        state.activeTab = {
            tabId: selectedTabId,
            titleElement: newTitle,
            contentElement: newContent,
        };

        if (newTitle) newTitle.classList.add('active');
        if (newContent) newContent.classList.add('active');
    }

    handleTabSwitch(startTabId);

    pageNavigation.addEventListener('click', function (event) {
        const tabId = event.target.getAttribute('for');
        if (tabId) {
            handleTabSwitch(tabId);
        }
    });

    pageNavigation.addEventListener('mouseenter', function (event) {
        event.target.classList.add('hover');
    }, true);

    pageNavigation.addEventListener('mouseleave', function (event) {
        event.target.classList.remove('hover');
    }, true);
});
