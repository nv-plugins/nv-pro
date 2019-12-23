Nv.use("jquery",function(nv,$) {
  console.log('index.js nv:', nv)
  $('#iptId').val(1111122)
  nv.modal.mod3.eventCallback = function (ev) {
    console.log('f3 eventCallback:', ev)
  }
})