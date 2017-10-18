$.get('https://www.reddit.com/r/FREEBANDZ/.json')
.then(function(success) {
    var posts = responseOrder(success);

    posts.forEach(function(post) {
        var container = document.createElement('div');
        var header = document.createElement('h2');
        var a = document.createElement('a');
        var image = document.createElement('img');

        header.innerText = post.title;
        image.setAttribute('src', formatSrc(post));
        a.setAttribute('href', 'single.html?url=' + post.permalink);
        a.appendChild(header);
        container.appendChild(a);
        container.appendChild(image);
        document.body.appendChild(container);
    });
});

 function responseOrder(data) {
    var children = data.data.children;

    return children.map(function(child, i) {
        var post = {};
        post.thumbnail = child.data.thumbnail;
        post.title = child.data.title;
        post.url = child.data.url;
        post.permalink = child.data.permalink;

        return post;
    });
} 

function formatSrc(post) {
    if (/\.(gif|.gifv|jpg|jpeg|tiff|png)$/i.test(post.url)) {
        if (post.url.indexOf('.gifv') != -1) {
            return post.url.replace('.gifv', '.gif'); 
        }

        return post.url;
    }

    return post.thumbnail;
} 


/* $.ajax({
    url: "https://www.reddit.com/r/FREEBANDZ/.json",
})

.then(function(success){
if (success){
    let dataFromReddit = success;
    console.log(dataFromReddit);
    }
 }),
    dataFromReddit.forEach(function(section) {
        var container = document.createElement('div');
        var header2 = document.createElement("h2")
        var a = document.createElement("a")
        var image = document.createElement("img")

        header2.innerText = section.title
        image.setAttribute('src', formatSrc(section));
        a.setAttribute('href', "single.html?url=" + section.permalink);
        a.appendChild(header2)
        container.appendChild(image)
        $("#info-section").body.appendChild(container)
    }) */
