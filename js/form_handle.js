$('document').ready (
    ()=>{
        //Import filesystem
        // const fs = require('fs');

        //JSON Variable
        let new_user = {};

        function handleSubmit(event) {
            event.preventDefault();
          
            const data = new FormData(event.target);
          
            const value = Object.fromEntries(data.entries());
          
            
            //Copy value to new_user
            new_user = JSON.stringify(value);
            $('.data').html(new_user);
            console.log({ value });
        }

        const form = $('form');
        //write new_user to JSON File
        // fs.appendFileSync('../db.json', new_user);
        console.log({new_user});
        
        form.on('submit', handleSubmit);

        $.ajax(
            {
                type: 'GET',
                datatype: 'json',
                async: false,
                url: 'http://localhost:3000/db.json',
                data: { data: new_user },
                success: function() {alert("Data pushed to db.json");},
                failure: function() {alert("Failed to push.");}
            }
        )
    }

    
);