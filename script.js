const $form = document.getElementById("sumar");

function handleEvent(event) {
  event.preventDefault();

  const $first = event.target.elements.first;
  const $second = event.target.elements.second;
  const $output = event.target.mostrar;
  const $operator = event.target.elements.operator;

  if ($operator.value === "+")
    $output.innerHTML = `${parseInt($first.value) + parseInt($second.value)}`;

  if ($operator.value === "-")
    $output.innerHTML = `${parseInt($first.value) - parseInt($second.value)}`;

  if ($operator.value === "/")
    $output.innerHTML = `${parseInt($first.value) / parseInt($second.value)}`;

  if ($operator.value === "*")
    $output.innerHTML = `${parseInt($first.value) * parseInt($second.value)}`;
}

$form.addEventListener("submit", handleEvent);
