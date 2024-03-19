
    let input_value = document.getElementById("input_search");
    let login_details = document.getElementById("LoginDetails");
    const search_text_box = document.getElementById("search_text_box");
    const card_value = document.querySelectorAll(".trip__details p");
    const card = document.querySelectorAll(".trip__card");
    const arr = Array.from(card);
    const search_result = document.createElement("div")
    search_result.setAttribute("class","search_result");
    input_value.addEventListener('click' ,(e)=>{
        e.preventDefault();
        const search_value = search_text_box.value;
        arr.map((curElem)=>{
            curElem.innerText.toLowerCase().includes(search_value.toLowerCase()) ? 
            curElem.classList.add("center_position") : curElem.classList.add("hide_card");
        });   
    });



    
