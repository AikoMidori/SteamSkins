//TIPS
//by the time this script is injected, the DOM is loaded
//alert function breaks CEF

console.log('hello from patcher');

const targetClass = 'steamdesktop_DragArea_30vB9';
const classesToMove = [
  'titlebarcontrols_NotificationButtonContainer_3mGEz',
  'bottombar_FriendsButton_1TdaA',
  'bottombar_AddGameButton_2foCk',
  'bottombar_DownloadStatus_2EQ7g'

];

const targetElement = document.querySelector(`.${targetClass}`);
if (!targetElement) {
  console.warn(`Target element with class '${targetClass}' not found.`);
} else {
  classesToMove.forEach((className) => {
    const element = document.querySelector(`.${className}`);
    if (!element) {
      console.warn(`Element with class '${className}' not found.`);
    } else {
      targetElement.appendChild(element);
    }
  });
}