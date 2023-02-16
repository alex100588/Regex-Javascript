const inputs = document.querySelectorAll('input')

const patterns = {
    telephone: /^[0-9]{10}$/,
    username: /^[a-z0-9]{5,12}$/i,
    password: /^[\w@-]{8,20}$/,
    slug: /^[a-z0-9-]{8,20}$/
}

function validate(field, regex){
    regex.test(field.value) ? field.className = 'valid' : field.className = 'invalid'
    
    // console.log(regex.test(field.value));
}

inputs.forEach(input=>{
    input.addEventListener('keyup', (e)=>{
        // console.log(e.target.attributes.name.value);
        validate(e.target, patterns[e.target.attributes.name.value])
    })
})