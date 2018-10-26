var PHUCTHIEN1995 = {
    init : function() {
        let div = document.createElement("div");
        div.className = "box";
        div.textContent = "banh0006";
        
        div.addEventListener("click", divClick);

        div.addEventListener("mouseover", mouseOver);
        
        div.addEventListener("mouseout", mouseOut);
        
        function divClick() {
            this.style.borderColor = "Chocolate";
            this.style.backgroundColor = "LightGrey";
        }
        
        function mouseOver(e) {
            e.classList.toggle("highlight");
        }
        
        function mouseOut(e) {
            e.classList.toggle("highlight");
        }
        
        let boxes = document.querySelector("#boxes");
        boxes.appendChild(boxes);
    }
};
