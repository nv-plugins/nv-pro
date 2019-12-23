Nv.use("jquery",function(nv,$) {
  console.log('index.js nv:', nv)
  $('#iptId').val(111)

  nv.modal.mod2.eventCallback = function (bool) {
    console.log('f12 eventCallback params:', bool, nv.modal.mod2.params)
    
  }
  nv.modal.mod2.enterCallback = function (ev) {
    console.log('enterCallback:', ev)
    
  }
  nv.modal.mod2.cancelCallback = function (ev) {
    console.log('cancelCallback:', ev)
    
  }
})