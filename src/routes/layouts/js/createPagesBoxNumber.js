export default function pagesBoxNumber($paginationPageNumbers, around){
    const $extraBox  = document.createElement("DIV");
    const $pagesList = document.createElement("UL");

    $extraBox.textContent = "...";
    $extraBox.classList.add("number")
    $extraBox.classList.add("extrabox")
            
    for(let i=0; i<around-5; i++){
        const $pagesListItem = document.createElement("LI");
        $pagesListItem.textContent = `${i+6}`;
        $pagesList.appendChild($pagesListItem)
    }
    
    $extraBox.onclick = e => e.target.lastElementChild.classList.toggle("show-list");
    
    $extraBox.appendChild($pagesList)
    $paginationPageNumbers.appendChild($extraBox)
}