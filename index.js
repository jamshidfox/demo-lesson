const name = document.getElementById('input-name')
const phone = document.getElementById('input-phone')

const submitForm = () => {
  window.alert(`
    Tabriklaymiz ${name.value}
    sizni nomeringiz muafaqtli qabul qilindi
    Sizni nomeringiz: ${phone.value}
  `)
}
