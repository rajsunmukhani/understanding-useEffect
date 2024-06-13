1. Now let us understand what if we want to use Axios in files, we have to apply Axios each time to each file to use it which will make extra amount of code, thus making programme more heavy.

to use axios in Users.jsx file, we will first make a function as : 

    1. *npm i axios --save* using this code on terminal install axios in our programme

    2. *const getUsers = async() => {
            try{
                const x = await axios.get("");
            }catch(error){
                console.log(error);
            }
        }*

3. Now we want dummy data to test our programme for that we will use *JSON Placeholder* an API which gives us data of 10 dummy users, to test our programme.

4. simply copy the url of JSON file holding data and pass it inside the axios.get as :

        const getUsers = async() => {
            try{
                const x = await axios.get(" *url* ");
                console.log(x);
            }catch(error){
                console.log(error);
            }
        }

5. Now, we have to call the function for it to make work, for that we will delete the old form and its inside content, instead on thing, the submit button, and rename tha value of submit button as get users, and make a onClick call passing refrence of the function.

6. Now, we can see that we will get data, by clicking on the button with value get user, on console. But the data is arranged in a deep object, which is a lengthy way if we want to make the use of data, so simply destructure it by renaming *x* as *{data}*.

7. Now, copy the same function in About.jsx page and make the useful data import.
    Simply copy everything that user is rendering and paste it inside About views section in place of  *About*, and update users to post accordingly as we'll be rendering posts here.

8. Now, here we can see that we have to use the axios twice in both the pages, which makes increases code intensity in a programme as we make some bigger websites or projects, For that we have to make a single use of Axios at a place where both of them can have access to as well as both can share the data being a different components.

9. for this we will make a folder named helpers/utils and inside it we will make a file named axios.jsx and inside it:  

    *import axios from 'axios';

    const instance = axios.create({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    });

    export default instance;*

as the code at end of url will differ as user or post accordingly, hence we use them as required but, rest of the same URL will be placed here as baseURL.

10. Now simply update the import of axios in About.jsx and Users.jsx page and make it as :
        import axios from '../helpers/axios'

    And, also replace the whole link with just its end parts either */users* or */posts*.


11. Now create a useState in 
        a. Users.jsx named *const [users,setUsers] =  useState("");*
        b. About.jsx named *const [posts,setPosts] =  useState("")*

12. Apply condition statement in views area to show data as : 
        a. in Users.jsx : 
            *
            <ul className='p-10 list-items'>
                {users ? users.map((u) => (
                        <li key={u.id} className='list-disc'>{u.name}</li>
                )) : <h1 className='text-red-400'>loading...</h1> }
            </ul>
            *
        b. in App.jsx : 
            *
             <ul className='p-10 list-items'>
                {posts ? posts.map((p) => (
                        <li key={p.id} className='list-disc'>{p.title}</li>
                )) : <h1 className='text-red-400'>loading...</h1> }
            </ul>
            *

13. Note : Remember to update console.log and replace it to set function of useState accordingly in both the files.