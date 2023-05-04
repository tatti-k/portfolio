window.onload = function() {
    var myParagraph = document.getElementById("my-explanation");
    console.log(myParagraph);
    if (myParagraph) {
        var text = myParagraph.innerHTML;
        text = text.replace("ロボコン同好会", '<a href="https://tutrobo.rm.me.tut.ac.jp/" target="_blank">ロボコン同好会</a>');
        text = text.replace("AI Tech Lab", '<a href="https://aiiot.jp/ai-tech-lab" target="_blank">AI Tech Lab</a>');
        myParagraph.innerHTML = text;
    }
};

