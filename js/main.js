(function() {

  // tabs
  const tabContainer = document.getElementById('tabs')
  const tabList = tabContainer.querySelector('.tab__list')
  
  // init
  let activeTab = tabList.children[0]
  activeTab.classList.add('tab--active')

  const panel = activeTab.dataset.tab
  let activePanel = tabContainer.querySelector(`.tab__content[data-tab-content='${panel}']`)
  activePanel.style.display = 'block';

  tabList.addEventListener('click', (event) => {
    if (!event.target.closest('.tab__item')) {
      return
    }

    activeTab.classList.remove('tab--active')
    activeTab = event.target.closest('.tab__item')
    // `toggle` IE x
    activeTab.classList.add('tab--active')

    const panel = activeTab.dataset.tab
    activePanel.style.display = 'none';
    activePanel = tabContainer.querySelector(`.tab__content[data-tab-content='${panel}']`)
    activePanel.style.display = 'block';
  });

})()