//Menu Structure

//Array of objects
//Top level items can be dropdown or link
//Second level items must be a link
//View- is a string which sets permissions
//link- is the direct path
//linkTo- dynamic linking set in topMenu.js
//links- sets the dropdown

export default  [,
    {name: "Search", view: "all", link: '/search', symbol: "search"},
    {name: "Random Articles", view: "all", link: '/search/portal-of-chaos', symbol: "asterisk"},
    {name: "Help & FAQs", view: "all", link: '/pages/help', symbol: "question"},
    /*{name: "Account", view: "no_user", symbol: "user", links: [
        {name: "Register", view: "all", link: '/users/register', symbol: ""},
        {name: "Login", view: "all", link: '/users/login', symbol: ""},
        {name: "Forgot My Password", view: "all", link: '/users/forgottenPassword', symbol: ""},
    ]},*/
    {name: "Get Updates", view: "no_user", remoteLink: "http://www.www.com", symbol: 'star'},
    {name: "Your Account", view: "logged_in", symbol: "user", links: [
        {name: "User List", view: 'admin', link: '/admin/users', symbol: "users"},
        {name: "Logs", view: 'admin', link: '/admin/logs', symbol: "cogs"},
        {name: "Feedback", view: 'admin', link: '/feedback', symbol: "comments"},
        {name: "Logout", view: 'all', link: '/users/logout', symbol: "sign-out-alt"}
    ]},
]
