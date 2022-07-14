const copy = (value) => {
  // const ele = document.createElement('textarea');
  // ele.value = value;
  // document.body.appendChild(ele);
  // ele.select();
  // ele.setSelectionRange(0, ele.value.length);
  // document.execCommand('copy');
  // ele.remove();

  // Clipboard API
  navigator.clipboard.writeText(value);
};

document.getElementById('copy').addEventListener('click', () => {
  copy('Hello, World');
});
