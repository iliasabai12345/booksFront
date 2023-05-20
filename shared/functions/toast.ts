const statuses = ['success', 'error'];
type status = 'success' | 'error' | string;

export function toast(image: status, text: string): void {
  const before = document.getElementById('toast');
  if (before) before.remove();
  const div = document.createElement('div');
  div.classList.add('toast');
  div.setAttribute('id', 'toast');
  if (statuses.includes(image)) image = 'assets/images/' + image + '.png';
  div.innerHTML = `<img src="${image}" height="50" alt="img"><span>${text}</span>`;
  document.body.append(div);
  const time = setTimeout(() => {
    div.remove();
    clearTimeout(time);
  }, 30000)
}
