window.addEventListener("load", function() {
    // this.window.alert(this.document.querySelector())
    let elements = this.document.querySelectorAll("figcaption");
    alert(elements[1].innerHTML);
});

let box = document.querySelector("#display");

let images = document.querySelectorAll(".thumbnail");

for (let i=0; i<images.length; ++i) {
    images[i].addEventListener("mouseenter", function() {
        console.log(this);
        box.style.backgroundImage = "url("+this.src+")";
    })
}

//element.style.backgroundImage = "url(https://)"
//focus and blur