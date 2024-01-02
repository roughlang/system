/* Get width of device for bootstrap5 like */
let bootstrapGrid;
// デバイスのビューポート幅に基づいて bootstrapGrid を設定する関数
function updateBootstrapGrid() {
  const deviceWidth = window.innerWidth;

  if (deviceWidth <= 575) {
    bootstrapGrid = 'xs';
  } else if (deviceWidth >= 576 && deviceWidth < 768) {
    bootstrapGrid = 'sm';
  } else if (deviceWidth >= 768 && deviceWidth < 992) { // 769から768に変更
    bootstrapGrid = 'md';
  } else if (deviceWidth >= 992 && deviceWidth < 1200) { // 1199から1200に変更
    bootstrapGrid = 'lg';
  } else if (deviceWidth >= 1200 && deviceWidth < 1400) { // 1399から1400に変更
    bootstrapGrid = 'xl';
  } else if (deviceWidth >= 1400) {
    bootstrapGrid = 'xxl';
  }
}
window.addEventListener('resize', updateBootstrapGrid);
updateBootstrapGrid();


