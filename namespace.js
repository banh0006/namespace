var PHUCTHIEN1995 = {
    init : function() {
        let myBox = document.createElement("div");
        myBox.className = "box";
        myBox.textContent = "banh0006";
        
        myBox.addEventListener("click", divClick);

        myBox.addEventListener("mouseover", mouseOver);
        
        myBox.addEventListener("mouseout", mouseOut);
        
        function divClick() {
            this.style.borderColor = "Chocolate";
            this.style.backgroundColor = "LightGrey";
        }
        
        function mouseOver(e) {
            e.target.classList.toggle("highlight");
        }
        
        function mouseOut(e) {
            e.target.classList.toggle("highlight");
            e.target.removeAttribute('style');
        }
        
        let boxes = document.querySelector("#boxes");
        boxes.appendChild(boxes);
    }
};
