const init = () => {
    const form = document.querySelector('form')
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        let formInput = document.querySelector('input#searchByID');
        
        fetch(`http://localhost:3000/movies/${formInput.value}`)
        .then(response => response.json())
        .then(data => {
            let title = document.querySelector('section#movieDetails h4')
            let summary = document.querySelector('section#movieDetails p')
            title.innerText = data.title
            summary.innerText = data.summary
        })
    })
}

document.addEventListener('DOMContentLoaded', init);