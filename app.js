import { insert } from "./firestore.js";

const form = document.querySelector("#form");
const formInput = document.querySelector("#input");


form.addEventListener('submit', e=>
{
    e.preventDefault();
    console.log("Bien!!!!!!!!!!!!!");

    
    const text = formInput.value;

    if(text !='')
    {
        addtext(text);
    }
});

async function addtext(text)
{
    try {

        const userObj = {
            users : [
                {
                    userName:'wesleydelossantos03@gmail.com',
                    password:'dfsh4re34qwedfE', 
                    conntacts:[
                            {name:'juan',lastName:'pablo',phoneNumber:'4657467',email:'sdfg@'},
                            {name:'juan',lastName:'pablo',phoneNumber:'4657467',email:'sdfg@'}
                        ]
                },
                {
                    userName:'wesleydelossantos@gmail.com',
                    password:'wdfgWRE#%$WSD2',
                    conntacts:[
                        {name:'juan',lastName:'pablo',phoneNumber:'4657467',email:'sdfg@'},
                        {name:'juan',lastName:'pablo',phoneNumber:'4657467',email:'sdfg@'}
                    ]
                },
                {
                    userName:'valeriodelossantos@gmail.com',
                    password:'sags322',
                    conntacts:[
                        {name:'juan',lastName:'pablo',phoneNumber:'4657467',email:'sdfg@'},
                        {name:'juan',lastName:'pablo',phoneNumber:'4657467',email:'sdfg@'}
                    ]
                },
            ]
        }

        const juanObj = {
           userName:'xcfghdghfsd@gmail.com',
            password:'4567467467465', 
            conntacts:[
                   
                ]
        }

        // const frutas_array = 
        // {
            
        //     array: [{
        //         name: "Pera",
        //         apellido: "DLS",
        //         contactos: 
        //         {
        //             Saludo: "Hola"
        //         }
        //     }, "orange", "banana", "Cherry", "Pineapple", "Banana","Orange"]
        // }
        const response = await insert(juanObj);
    } catch (error) {
        console.error(error);
    }
} 
