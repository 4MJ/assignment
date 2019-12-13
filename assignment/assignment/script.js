// $('div').not('.first').click(function(){
//     $(this).html("New text");
//     $(this).css({
//         color: '#cc55cc',
//         fontSize: '42px',
//         fontWeight: '800'
//     });
// })

$(document).ready(function(){
    $('style').html(`
    body{
        align-content: center;
        margin-left:100px;
    }
    #comment{
        width: 500px;
        margin: 100px;
    }
    input{
        display: block;
        width: 100%;
        padding: 15px 8px;
        font-size: 16px;
        margin-bottom: 20px;
    }
    button{
        display: block;
        width: 100%;
        padding: 15px 0px;
        font-size: 16px;
        background: #dd45cc;
        color: #fff;
    }
    ul{
        text-decoration: none;
        list-style-type: none;
        color: black;
        margin-top:10px;
    }
    textarea{

        display: block;
        width: 100%;
        padding: 15px 8px;
        font-size: 16px;
        margin-bottom: 20px;
    }
    `);
    $('#comment').html(`
    <form id="form">
        <input type="text" id="name" placeholder="Enter Your Name"></input>
        <input type="email" id="email" placeholder="Enter Your Email"></input>
        <textarea id="commentArea" placeholder="Write your comment here"></textarea>
        <button type="button" id="button">Comment</button>
    </form>
    <ul>
    </ul>
    `)
    $('button').click(function(){
        if($('#name').val()==''||$('#email').val()==''||$('#commentArea').val()==''){
            alert('Please make sure you fill all the fields')
        }else{
            let name=$('#name').val();
            let comment=$('#commentArea').val();
            let name1;
            let comment1;
            if(localStorage.getItem('names')==null && localStorage.getItem('comments')==null){
                name1=[];
                comment1=[];
            }else{
                name1 = JSON.parse(localStorage.getItem('names'));
                comment1 = JSON.parse(localStorage.getItem('comments'));
            }
            name1.push(name);
            localStorage.setItem('names', JSON.stringify(name1));
            comment1.push(comment);
            localStorage.setItem('comments', JSON.stringify(comment1));
            name='', comment='';
            // $('#comment').append(`${name}: ${comment}`);
        }
        
     });
    let name2=JSON.parse(localStorage.getItem('names'));
    let comment2=JSON.parse(localStorage.getItem('comments'));
        for(let i=0,j=0; i<name2.length, j<comment2.length; i++,j++){
            $('ul').append('<li>');
            if($('li').val()==''){
                $('li').append(`
                    ${name2[i]} : ${comment2[j]}
                `);
            }else{
                return $('li');
            }
        }
    console.log(`${name2} and ${comment2}`);
 })