$(document).ready(function(){
    $('fieldset').append(`
        <div>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" value="" aria-describedby="name-format" required>
        <span id="name-format" class="help">Format </span>
        </div>

    `)
})