import React from 'react'

const Bookmarks = ({ bookmarks , onDelete}) => {

    return (
        bookmarks.map((bookmark) => {
            let index = bookmark.url.indexOf("/", 10);
            let bookmarkUrl = bookmark.url.slice(0,index)
            let bookmarkIcon = bookmarkUrl + "/favicon.ico";
            // console.log(bookmarkIcon)
            return <li key={bookmark.id}>
                <img key={bookmark.id+"img"} src={bookmarkIcon} alt="" width="20" height="20" />
                <a key={bookmark.id} href={bookmark.url} >{bookmark.SiteName}</a>
                <i className="bi bi-trash-fill" onClick={() => onDelete(bookmark.id)}></i>
            </li>;
        })
    )
}

export default Bookmarks
