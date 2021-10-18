import React from 'react'
import Button from './Button'
import InputComponent from './InputComponent'
import '../assets/bookmarkContainer.css'
import Bookmarks from './Bookmarks'


const BookmarkContainer = () => {
    const bks = [
        {
            id:1,
            SiteName : 'Google',
            url : 'https://www.google.com/'
        },
        {
            id:2,
            SiteName : 'Youtube',
            url : 'https://www.youtube.com/'
        },
        {
            id: 3,
            SiteName : 'Instagram',
            url : 'https://www.instagram.com/'
        },
        {
            id: 4,
            SiteName : 'LinkedIn',
            url : 'https://www.linkedin.com/'
        },
        // {
        //     id: 5,
        //     SiteName : 'youtube3',
        //     url : 'https://www.youtube.com'
        // },
        // {
        //     id: 6,
        //     SiteName : 'youtube3',
        //     url : 'https://www.youtube.com'
        // },

    ]
    const [bookmarks, setBookmarks] = React.useState(bks)
    
    const formToggle = () => {
        var bookmarkForm = document.getElementById('bookmark-form');
        console.log(bookmarkForm)
        let addButton = document.getElementById("Close")
        if (bookmarkForm.style.display === "none") {
          addButton.innerHTML = "Close";
          bookmarkForm.style.display = "block";
        } else {
          addButton.innerHTML = "Add";
          bookmarkForm.style.display = "none";
        }
    }
    
    const deleteBookmarks = (id) => {
        setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== id));
    }

    const addBookmarks = () => {
        let id = bookmarks.length + 1;
        let siteName = document.forms['bookmark-form']['site-name'].value;
        let siteUrl = document.forms['bookmark-form']['site-url'].value;
        if (siteUrl.at(-1) !== '/') {
            siteUrl += '/';
        } 
        
        let newBookmark = {
            id: id,
            SiteName: siteName,
            url: siteUrl
        }
        setBookmarks([...bookmarks, newBookmark]);
        document.forms['bookmark-form']['site-name'].value = "";
        document.forms['bookmark-form']['site-url'].value = "";
    }
   

    return (
        <div className='bookmark-container'>
            <h1>Sites:<Button name="Close" title='Add' onClick={formToggle} /></h1>
            <ul>
                <InputComponent Function={addBookmarks} className="site" Name1="site-name" Name2="site-url" Placeholder1="Site Name" Placeholder2="Site Url" ButtonTitle="+" ButtonSize={16} ButtonLength={160} ButtonName = "+" formName="bookmark-form" InputWidth={200} />
            </ul>
            <ul className="bookmarks-list">
                <Bookmarks bookmarks={bookmarks} onDelete={deleteBookmarks}/>
            </ul>
        </div>
    )
}

export default BookmarkContainer
