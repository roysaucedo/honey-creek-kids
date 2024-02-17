const shopAllBtn = document.getElementById("0")
const collectionBtn1 = document.getElementById("1")
const collectionBtn2 = document.getElementById("2")
const collectionBtn3 = document.getElementById("3")


const characterFeaturedCollection = document.getElementById("character")
const abcFeaturedCollection = document.getElementById("abc")
const handbookFeaturedCollection = document.getElementById("handbook")


console.log(characterFeaturedCollection)
console.log(abcFeaturedCollection)
console.log(handbookFeaturedCollection)


function clickShopAllBtn (){
    shopAllBtn.classList.add("collection-header--icon-title-selected");
    collectionBtn1.classList.remove("collection-header--icon-title-selected");
    collectionBtn2.classList.remove("collection-header--icon-title-selected");
    collectionBtn3.classList.remove("collection-header--icon-title-selected");
    

    characterFeaturedCollection.classList.remove("hide-div");
    abcFeaturedCollection.classList.remove("hide-div");
    handbookFeaturedCollection.classList.remove("hide-div");
}

function clickCollectionBtn1 (){
    collectionBtn1.classList.add("collection-header--icon-title-selected");
    collectionBtn2.classList.remove("collection-header--icon-title-selected");
    collectionBtn3.classList.remove("collection-header--icon-title-selected");
    shopAllBtn.classList.remove("collection-header--icon-title-selected");
    shopAllBtn.classList.add("collection-header--icon-title");

    characterFeaturedCollection.classList.remove("hide-div");
    abcFeaturedCollection.classList.add("hide-div");
    handbookFeaturedCollection.classList.add("hide-div");
}

function clickCollectionBtn2 (){
    collectionBtn2.classList.add("collection-header--icon-title-selected");
    collectionBtn1.classList.remove("collection-header--icon-title-selected");
    collectionBtn3.classList.remove("collection-header--icon-title-selected");
    shopAllBtn.classList.remove("collection-header--icon-title-selected");
    shopAllBtn.classList.add("collection-header--icon-title");

    characterFeaturedCollection.classList.add("hide-div");
    handbookFeaturedCollection.classList.add("hide-div");
    abcFeaturedCollection.classList.remove("hide-div");
}

function clickCollectionBtn3 (){
    collectionBtn3.classList.add("collection-header--icon-title-selected");
    collectionBtn1.classList.remove("collection-header--icon-title-selected");
    collectionBtn2.classList.remove("collection-header--icon-title-selected");
    shopAllBtn.classList.remove("collection-header--icon-title-selected");
    shopAllBtn.classList.add("collection-header--icon-title");

    characterFeaturedCollection.classList.add("hide-div");
    abcFeaturedCollection.classList.add("hide-div");
    handbookFeaturedCollection.classList.remove("hide-div");
}




shopAllBtn.addEventListener("click", clickShopAllBtn);
collectionBtn1.addEventListener("click", clickCollectionBtn1);
collectionBtn2.addEventListener("click", clickCollectionBtn2);
collectionBtn3.addEventListener("click", clickCollectionBtn3);

