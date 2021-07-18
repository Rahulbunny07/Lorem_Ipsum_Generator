function generate() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText)
            document.getElementById("result").innerHTML = this.responseText
        }
    }
    let num = document.getElementById("num_of_sentence").value
    document.getElementById("num_of_sentence").value = ""
    let url = "https://baconipsum.com/api/?type=all-meat&format=text&sentences=" + num 
    xhttp.open("GET", url, true)
    xhttp.send()
}