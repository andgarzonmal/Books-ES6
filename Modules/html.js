const book = ({ title, author, index }) => `
<li id=${index}>
  <p>'${title}' by ${author} </p> 
  <button class="removebook" id="removebook" value="Add Book" onclick="">Remove</button>
</li>`;

export default book