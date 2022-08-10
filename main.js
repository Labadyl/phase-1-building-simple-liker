// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
likes()

document.addEventListener("DOMContentLoaded", () => {
})

const errorModal = document.querySelector("#modal")
errorModal.classList.add('hidden')

function likes(){
  const likeB = document.querySelectorAll(".like-glyph")

  likeB.forEach((l) => {
    l.addEventListener("click",(event)=> console.log("hey"))
  })
  mimicServerCall()
  .then(resp => '' )
  .catch(error => {
    errorModal.classList.remove('hidden')
    setTimeout(()=>{
      errorModal.classList.add('hidden')
    },3000)
  })
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
