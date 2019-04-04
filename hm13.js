var testImage = document.createElement ( 'img' )
document.body.appendChild ( testImage )

fetch("https://avatars2.githubusercontent.com/u/4?v=5")
    .then(response => response.blob()
        .then(response => {
            testImage.src = URL.createObjectURL(response)
        })
    )

