var
  specializationsTabs = document.querySelector('.specialization-tab-list'),
  currentTab = null,
  currentTabClass = null,
  currentTabContent = null;

// function getCurrentSpecialization() {
//   var currentTab = specializationsTabs.querySelector('input.specialization-tab-radio:checked');
//   var currentTabClass = currentTab.classList(2);
// }

specializationsTabs.addEventListener('click', function(evt) {
  currentTab = specializationsTabs.querySelector('.specialization-tab-radio:checked');
  currentTabClass = currentTab.classList.item(1);
  console.log('currentTabClass — ' + currentTabClass);
  currentTabContent = document.querySelector('.specialization-list' + currentTabClass);
  console.log('currentTabContent — ' + currentTabContent);
  if(currentTabContent.classList.contain('hidden')){
    currentTabContent.classList.remove('hidden');
  }
});
