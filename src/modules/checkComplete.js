function check(checkbox, item) {
  if (checkbox.checked) {
    item.completed = true
    console.log(item)
  } else {
    item.completed = false
    console.log(item)
  }
}

export { check }