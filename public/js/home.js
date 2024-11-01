//Search function
class Search{
    constructor(data){
        this.data = data;
    }
    equal(text,keyword){
        return text.toLowerCase().indexOf(keyword.toLowerCase()) == -1;
    }
    byTitle(keyword){
        for(let i = 0; i < this.data.length; i++){
            const poster = this.data[i];
            let name = poster.querySelector(".name").alt;
            if (this.equal(name,keyword)){
                this.data[i].style.display = "none";
            }
            else{
                this.data[i].style.display = "";
            }
        }
    }
}

let keyword = document.querySelector("#search");

const search = () => {
    let posters = document.querySelectorAll(".kotak");
    let search = new Search(posters);
    search.byTitle(keyword.value);
}
keyword.addEventListener("keyup",search);