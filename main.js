let content = [{
    img: "static/pexels-jimmy-jimmy-1484794.jpg",
    name: "Mwangi",
    job: "IT Specialist",
    review: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
}, {
    img: "/static/pexels-pixabay-220453.jpg",
    name: "James",
    job: "Lover",
    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}, {
    img: "static/pexels-jimmy-jimmy-1484794.jpg",
    name: "Diana",
    job: "Fighter",
    review: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet, comes from a line in section 1.10.32."
}, {
    img: "/static/pexels-pixabay-415829.jpg",
    name: "Maina",
    job: "Sower",
    review: "here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic wo"
}];


let img = document.getElementById("img")
let fname = document.getElementById("name")
let job = document.getElementById("job")
let review = document.getElementById("review")
let left = document.getElementById("left")
let right = document.getElementById("right")
let random = document.getElementById("random")

counter = 1


let cont = (count) => {
    count = counter

    img.src = content[count].img
    fname.innerText = content[count].name
    job.innerText = content[count].job
    review.innerText = content[count].review
}

window.addEventListener("DOMContentLoaded", cont)


right.addEventListener("click", event => {
    cont(counter++)
    if (counter >= box.length) {
        counter = 0
    }
})
left.addEventListener("click", event => {
    cont(counter--)
    if (counter < 0) {
        counter = box.length - 1
    }
})
random.addEventListener("click", event => {
    counter = (Math.floor(Math.random() * content.length))
    cont(counter)
})