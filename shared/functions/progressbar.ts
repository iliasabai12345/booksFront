export function hidePB() {
  const id = document.getElementById('progressbar');
  id && (id.style.visibility = 'hidden');
}

export function showPB() {
  const id = document.getElementById('progressbar');
  id && (id.style.visibility = 'visible');
}
