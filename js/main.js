document.addEventListener('DOMContentLoaded', () => {

    const tabTrigger = document.querySelectorAll('.js__tab__trigger');
    const tabTarget = document.querySelectorAll ('.js__tab__target');
  
    tabTrigger.forEach(tabTriggers => {
      tabTriggers.addEventListener('click', (e) => {
        let currentMenu = e.currentTarget;
        let currentContent = document.getElementById(currentMenu.dataset.id);
        tabTrigger.forEach(tabTriggers => {
          tabTriggers.classList.remove('is-active');
        });
  
        currentMenu.classList.add('is-active');
  
        tabTarget.forEach(tabTargets => {
          tabTargets.classList.remove('is-active');
        });
        if (currentContent !== null) {
          currentContent.classList.add('is-active');
        }
      }); 
    });
  });