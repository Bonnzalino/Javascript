function renderCurrentUserPosts() {
    getCurrentUser().then((getCurrentUser) => {
        getPosts(currentUser.Id).then((posts) => {
            renderCurrentUserPosts(posts);
        });
    })
}