let post = new BlogPost('JavaScript', 'Abstract','M. Diaz');
console.log(post);

function BlogPost(title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.isLive = false;
    this.comment = [];
}