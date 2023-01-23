const relInput = () => {
  let inputs = document.getElementsByTagName('input[rel="phone"]')

  inputs.forEach((it) => {
    it.addEventListener('change', (e) => {
      let value = it.value.replace(/[^0-9]/g, '')

      if (value.length == 10 || value.length == 11) {
        value = value.slice(value.length - 10)

        it.value = 
          `+7 (${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 8)}-${value.slice(8, 10)}`
      }
    })
  })
}

relInput()
