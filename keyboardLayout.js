const keyboardLayout = [
  [
    {
      code: 'Backquote',
      func: false,
      lang: { en: '`', ru: 'Ё' },
      width: 'regular',
    },
    {
      code: 'Digit1',
      func: false,
      lang: { en: '1', ru: '1' },
      width: 'regular',
    },
    {
      code: 'Digit2',
      func: false,
      lang: { en: '2', ru: '2' },
      width: 'regular',
    },
    {
      code: 'Digit3',
      func: false,
      lang: { en: '3', ru: '3' },
      width: 'regular',
    },
    {
      code: 'Digit4',
      func: false,
      lang: { en: '4', ru: '4' },
      width: 'regular',
    },
    {
      code: 'Digit5',
      func: false,
      lang: { en: '5', ru: '5' },
      width: 'regular',
    },
    {
      code: 'Digit6',
      func: false,
      lang: { en: '6', ru: '6' },
      width: 'regular',
    },
    {
      code: 'Digit7',
      func: false,
      lang: { en: '7', ru: '7' },
      width: 'regular',
    },
    {
      code: 'Digit8',
      func: false,
      lang: { en: '8', ru: '8' },
      width: 'regular',
    },
    {
      code: 'Digit9',
      func: false,
      lang: { en: '9', ru: '9' },
      width: 'regular',
    },
    {
      code: 'Digit0',
      func: false,
      lang: { en: '0', ru: '0' },
      width: 'regular',
    },
    {
      code: 'Minus',
      func: false,
      lang: { en: '-', ru: '-' },
      width: 'regular',
    },
    {
      code: 'Equal',
      func: false,
      lang: { en: '=', ru: '=' },
      width: 'regular',
    },
    {
      code: 'Backspace',
      func: true,
      lang: { en: '⌫ Back', ru: '⌫ Back' },
      width: 'wide',
    },
    {
      code: 'Delete',
      func: true,
      lang: { en: 'Del ⌦', ru: 'Del ⌦' },
      width: 'wide',
    },
  ],
  [
    {
      code: 'Tab',
      func: true,
      lang: { en: '↹ Tab', ru: '↹ Tab' },
      width: 'extra-wide',
    },
    { code: 'KeyQ', func: false, lang: { en: 'Q', ru: 'й' }, width: 'regular' },
    { code: 'KeyW', func: false, lang: { en: 'W', ru: 'ц' }, width: 'regular' },
    { code: 'KeyE', func: false, lang: { en: 'E', ru: 'у' }, width: 'regular' },
    { code: 'KeyR', func: false, lang: { en: 'R', ru: 'к' }, width: 'regular' },
    { code: 'KeyT', func: false, lang: { en: 'T', ru: 'е' }, width: 'regular' },
    { code: 'KeyY', func: false, lang: { en: 'Y', ru: 'н' }, width: 'regular' },
    { code: 'KeyU', func: false, lang: { en: 'U', ru: 'г' }, width: 'regular' },
    { code: 'KeyI', func: false, lang: { en: 'I', ru: 'ш' }, width: 'regular' },
    { code: 'KeyO', func: false, lang: { en: 'O', ru: 'щ' }, width: 'regular' },
    { code: 'KeyP', func: false, lang: { en: 'P', ru: 'з' }, width: 'regular' },
    {
      code: 'BracketLeft',
      func: false,
      lang: { en: '[', ru: 'х' },
      width: 'regular',
    },
    {
      code: 'BracketRight',
      func: false,
      lang: { en: ']', ru: 'ъ' },
      width: 'regular',
    },
    {
      code: 'Backslash',
      func: false,
      lang: { en: '\\', ru: '\\' },
      width: 'regular',
    },
  ],
  [
    {
      code: 'CapsLock',
      func: true,
      lang: { en: 'CapsLock', ru: 'CapsLock' },
      width: 'extra-wide',
    },
    { code: 'KeyA', func: false, lang: { en: 'A', ru: 'ф' }, width: 'regular' },
    { code: 'KeyS', func: false, lang: { en: 'S', ru: 'ы' }, width: 'regular' },
    { code: 'KeyD', func: false, lang: { en: 'D', ru: 'в' }, width: 'regular' },
    { code: 'KeyF', func: false, lang: { en: 'F', ru: 'а' }, width: 'regular' },
    { code: 'KeyG', func: false, lang: { en: 'G', ru: 'п' }, width: 'regular' },
    { code: 'KeyH', func: false, lang: { en: 'H', ru: 'р' }, width: 'regular' },
    { code: 'KeyJ', func: false, lang: { en: 'J', ru: 'о' }, width: 'regular' },
    { code: 'KeyK', func: false, lang: { en: 'K', ru: 'л' }, width: 'regular' },
    { code: 'KeyL', func: false, lang: { en: 'L', ru: 'д' }, width: 'regular' },
    {
      code: 'Semicolon',
      func: false,
      lang: { en: ';', ru: 'ж' },
      width: 'regular',
    },
    {
      code: 'Quote',
      func: false,
      lang: { en: "'", ru: 'э' },
      width: 'regular',
    },
    {
      code: 'Enter',
      func: true,
      lang: { en: '↩ Enter', ru: '↩ Enter' },
      width: 'extra-wide',
    },
  ],
  [
    {
      code: 'ShiftLeft',
      func: true,
      lang: { en: '⇧ Shift', ru: '⇧ Shift' },
      width: 'extra-wide',
    },
    { code: 'KeyZ', func: false, lang: { en: 'Z', ru: 'я' }, width: 'regular' },
    { code: 'KeyX', func: false, lang: { en: 'X', ru: 'ч' }, width: 'regular' },
    { code: 'KeyC', func: false, lang: { en: 'C', ru: 'с' }, width: 'regular' },
    { code: 'KeyV', func: false, lang: { en: 'V', ru: 'м' }, width: 'regular' },
    { code: 'KeyB', func: false, lang: { en: 'B', ru: 'и' }, width: 'regular' },
    { code: 'KeyN', func: false, lang: { en: 'N', ru: 'т' }, width: 'regular' },
    { code: 'KeyM', func: false, lang: { en: 'M', ru: 'ь' }, width: 'regular' },
    {
      code: 'Comma',
      func: false,
      lang: { en: ',', ru: 'б' },
      width: 'regular',
    },
    {
      code: 'Period',
      func: false,
      lang: { en: '.', ru: 'ю' },
      width: 'regular',
    },
    {
      code: 'Slash',
      func: false,
      lang: { en: '/', ru: '.' },
      width: 'regular',
    },
    {
      code: 'ArrowUp',
      func: true,
      lang: { en: '⯅', ru: '⯅' },
      width: 'regular',
    },
    {
      code: 'ShiftRight',
      func: true,
      lang: { en: '⇧ Shift', ru: '⇧ Shift' },
      width: 'extra-wide',
    },
  ],
  [
    {
      code: 'ControlLeft',
      func: true,
      lang: { en: 'Ctrl', ru: 'Ctrl' },
      width: 'wide',
    },
    {
      code: 'AltLeft',
      func: true,
      lang: { en: 'Alt', ru: 'Alt' },
      width: 'wide',
    },
    {
      code: 'Space',
      func: false,
      lang: { en: ' ', ru: ' ' },
      width: 'ultra-wide',
    },
    {
      code: 'AltRight',
      func: true,
      lang: { en: 'Alt', ru: 'Alt' },
      width: 'wide',
    },
    {
      code: 'ControlRight',
      func: true,
      lang: { en: 'Ctrl', ru: 'Ctrl' },
      width: 'wide',
    },
    {
      code: 'ArrowLeft',
      func: true,
      lang: { en: '⯇', ru: '⯇' },
      width: 'regular',
    },
    {
      code: 'ArrowDown',
      func: true,
      lang: { en: '⯆', ru: '⯆' },
      width: 'regular',
    },
    {
      code: 'ArrowRight',
      func: true,
      lang: { en: '⯈', ru: '⯈' },
      width: 'regular',
    },
  ],
];
const keyboardKeys = {};
const keyboardFragment = document.createDocumentFragment();
keyboardLayout.forEach((line) => {
  const keyboardRow = document.createElement('div');
  keyboardRow.classList.add('keyboard__row');
  line.forEach((key) => {
    keyboardKeys[key.code] = key.lang;
    keyboardKeys[key.code].func = key.func;
    const keyElement = document.createElement('button');
    keyElement.setAttribute('id', key.code);
    keyElement.setAttribute('type', 'button');
    keyElement.classList.add('keyboard__key');
    keyElement.classList.add(`keyboard__key_${key.width}`);
    keyElement.textContent = key.lang.en;
    keyboardRow.appendChild(keyElement);
  });
  keyboardFragment.appendChild(keyboardRow);
});
export { keyboardFragment, keyboardKeys };
