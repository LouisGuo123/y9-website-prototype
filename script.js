function swap(id1, content1, id2, content2) {
    document.getElementById(content1).style.display = "inline-block";
    document.getElementById(content2).style.display = "none";

    document.getElementById(id1).classList.add("activated");
    document.getElementById(id2).classList.remove("activated");

    document.getElementById(id1).setAttribute("onmousedown", "");
    document.getElementById(id2).setAttribute("onmousedown", "swap('"+id2+"', '"+content2+"', '"+id1+"', '"+content1+"')");
}