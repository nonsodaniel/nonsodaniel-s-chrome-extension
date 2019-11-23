
const myForm = document.querySelector("#myForm");

myForm.addEventListener("submit", saveBookmark)



function saveBookmark(e) {
    e.preventDefault()
    const siteName = document.querySelector("#siteName").value;
    const siteUrl = document.querySelector("#siteUrl").value;
    console.log(siteUrl)
    let bookmark = {
        siteName, siteUrl
    }
    console.log(bookmark)
    //check if storage is empty
    if (localStorage.getItem("bookmarks") === null) {
        let bookmarks = [];
        bookmarks.push(bookmark);
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    } else {
        //if not?
        let _bookmarks = JSON.parse(localStorage.getItem("bookmarks"))
        console.log(_bookmarks)
        _bookmarks.push(bookmark)
        localStorage.setItem("bookmarks", JSON.stringify(_bookmarks))
        fetchBookmarks()
    }

}



// function deleteBookMark(e) {
//     let _bookmarks = JSON.parse(localStorage.getItem("bookmarks"))
//     console.log("hjvv", e)
// }

function fetchBookmarks() {
    return (function () {
        let _bookmarks = JSON.parse(localStorage.getItem("bookmarks"))
        // console.log(_bookmarks)
        let htmlData = document.querySelector("#bookmarksResults")
        let html = ""
        _bookmarks.map(res => {

            html += `
                <div>
                    Name: <span>${res.siteName}</span>
                    Url: <span>${res.siteUrl}</span>
                    <button class="btn btn-danger delete-bm" data-url="${res.siteUrl}">Remove</button>
                </div>
            `
            // console.log(html)

            htmlData.innerHTML = html
        })
    })()
}






