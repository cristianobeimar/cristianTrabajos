
document.getElementById("comentForm").addEventListener('submit', function(event)
{
event.preventDefault();

    const name = document.getElementById('name').value
    const comment = document.getElementById('comment').value

    addCommenToList({name:name, body: comment});
    document.getElementById('commentForm').reset();
});
function addCommenToList(comment){
    const commentsList = document.getElementById("commentsList");
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');

    const commentAuthor = document.createElement('h3');
    commentAuthor.textContent = comment.name;

    const commentBody = document.createElement('p');
    commentBody.textContent = comment.body;

commentDiv.appendChild(commentAuthor);
commentDiv.appendChild(commentBody);
commentsList.appendChild(commentDiv);
}
fetch('https://jsonplaceholder.typicode.com/comments-limit=5')
    .then(response=> response.json())
    .then(data => {
        data.forEach(comment => addCommenToList(comment));     
        }).catch(error => console.error('Error',error));
       
    