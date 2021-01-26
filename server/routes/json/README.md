# How redirects work

When user requests any page on `blog.maddevs.io` or `blog.maddevs.co` server checks what page is needed to return.

List of pages lies in `redirect.json` file on the same level as this README

List consists of objects with input url (without host that was requested) and target link to redirect to; Example:

```
{
    "from": "/middle-and-senior-ios-developers-f5eb41be694d",
    "to": "https://medium.com/maddevs-io/middle-and-senior-ios-developers-f5eb41be694d"
}
```

### NOTE
##### Requested URLs shouldn't contain trailing slash!

In case no link is found in the list, main site routing handles further request

---

# How to manage redirects

Just add, remove or update existing object described above with the links you need to have with redirects

If there are objects with the same `from` property, redirect will be proceed to the link defined in `to` property from the object that was mentioned first
