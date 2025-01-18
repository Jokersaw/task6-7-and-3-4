document.addEventListener('DOMContentLoaded', function () {
    const welcomeToggle = document.getElementById('welcome-toggle');
    const dropDownPage = document.querySelector('.drop-down-page');
    const tabTitles = document.querySelectorAll('.tab-title');
    const tabContents = document.querySelectorAll('.tab-content');
    const radioTabs = document.querySelectorAll('input[name="nav-tabs"]');

    function toggleDropDown() {
        if (welcomeToggle.checked) {
            dropDownPage.style.minHeight = '50vh';
            dropDownPage.style.opacity = '1';
            dropDownPage.style.pointerEvents = 'auto';
            dropDownPage.style.transition = 'opacity 0.3s ease-in, height 0.3s ease-in';
        } else {
            dropDownPage.style.minHeight = '0';
            dropDownPage.style.opacity = '0';
            dropDownPage.style.pointerEvents = 'none';
            dropDownPage.style.transition = 'opacity 0.3s ease-out, min-height 0.3s ease-out';
        }
    }

    toggleDropDown()

    welcomeToggle.addEventListener('change', toggleDropDown);

    function handleTabSwitch(selectedTabId) {

        radioTabs.forEach(tab => {
            if (tab.id === selectedTabId) {
                tab.checked = true;
            }
        });
        tabContents.forEach(tabContent => {
            tabContent.style.display = 'none';
        });
        const selectedContent = document.getElementById(selectedTabId + '-content');
        if (selectedContent) {
            selectedContent.style.display = 'block';
        }

        tabTitles.forEach(title => {
            title.style.background = '#a63c00';
            title.style.color = '#fff';
            title.style.borderBottom = 'none';
            title.style.borderRight = '0.125vw solid #752d03';
        });

        const selectedLabel = document.querySelector(`label[for="${selectedTabId}"]`);
        if (selectedLabel) {
            selectedLabel.style.background = '#fff';
            selectedLabel.style.color = '#2c3e50';
            selectedLabel.style.borderBottom = '0';
            selectedLabel.style.borderRight = '0.125vw solid #fff';
        }
    }

    tabTitles.forEach(title => {
        title.addEventListener('click', function () {
            const tabId = this.getAttribute('for');
            handleTabSwitch(tabId);
        });
    });

    handleTabSwitch('tab-1');

});
