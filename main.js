const copy = (value, options = { container: document.body }) => {
  const ele = document.createElement('textarea');
  ele.value = value;
  options.container.appendChild(ele);
  ele.select();
  ele.setSelectionRange(0, ele.value.length);
  const text = ele.value;
  document.execCommand('copy');
  ele.remove();
  return text;
};

document.getElementById('copy').addEventListener('click', () => {
  copy('Hello, World!');
});
