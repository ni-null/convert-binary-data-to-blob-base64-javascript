let xhr = new XMLHttpRequest() // new HttpRequest instance

xhr.open("POST", "https://your.url/")
xhr.responseType = "blob" //important
xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
xhr.setRequestHeader("Authorization", "Bearer " + token) // if need

xhr.onload = function () {
  if (xhr.readyState === xhr.DONE) {
    if (xhr.status === 200) {
      console.log(xhr.response)

      const blob = xhr.response
      /*   downlaod blob  file  */
      let blob_el = document.createElement("a")
      const blobUrl = window.URL.createObjectURL(new Blob([blob], { type: blob.type }))
      document.body.appendChild(blob_el)
      blob_el.style = "display: none"
      blob_el.href = blobUrl
      blob_el.download = "blob_el.png"
      blob_el.click()
      /*   downlaod blob  file  */

      /*  convert blob to base64 ,download file */
      const reader = new FileReader()
      reader.onloadend = () => {
        console.log(reader.result)
        let base64_el = document.createElement("a")
        document.body.appendChild(base64_el)
        base64_el.href = reader.result
        base64_el.style = "display: none"
        base64_el.download = "base64.png"
        base64_el.click()

        /*   
         console.log(base64_el)↓  
         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABkAAAASwCAYAAACjAYaXAA... 
        */
      }
    } else {
      console.log(xhr.statusText)
    }
  }
}

xhr.send(JSON.stringify(data))
