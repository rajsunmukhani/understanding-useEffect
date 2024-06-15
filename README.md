Project from Folder No. 16.making the use of API and Axios.

Now, we want to call the API without clicking the button, for this we have to make the use of *useEffect*.

1. There are basically three steps which react undergoes with a page viz. 
    a. Mounting (Creation)
    b. Updation
    c. Unmounting (Deletion)

2. when we go from Home page to About page in our programme we gennerally make the process undergo named *Mounting of About page*, and *Unmounting of Home page* also, when we click the button on About page we make *updation of About page* undergo.

3. Now, useEffect is the pre-determined hook in react which helps us to make changes work at the time of mounting and unmounting.

4. whnever we use useEffect with an array it means that it will work on both on mounting, as well as on updation, as we know that mounting is done only once, so, the code written inside useEffect will work on updation also.

    useEffect with array is as :
        useEffect(() => {
            *code for mounting*
        },[*code for updation*]);

5. Now, if we want that if there is change in state (variables of react) of our page we want to reload the whole page, so we will write the name of state in square brackets of useEffect.

    as before writing it the code was : 

        useEffect(() => {
            console.log("mounted");
        },[]);

        This was returning:
            loaded
            mounted
        for once and after that only :
            loaded

    now if we write the name of state which on change refreshes the whole page:

        useEffect(() => {
            console.log("mounted");
        },[posts]);

        now whenever the page reloads it will return:
            loaded 
            mounted
        and whenever the post state changes it will relaod the page and thus again returning : 
            loaded
            mounted

6. Now we will be writing code for unmounting which is written at the place of mounting in useEffect but after *return tag* and as a function as :

        useEffect(() => {
            *code for mounting*.

            return () => {
                *code for unmounting*
            }   

        },[*code for updation*]);

7. now to make it automated so that no requirement of client is required to click on submit button will look as : 

        useEffect(() => {
            console.log("mounted!")
            getposts();
            return() => {
                console.log("unmounted!");
            }
        },[]);

8. Now we want that on change of state of post we want to re-render the page for that the code will be :

        useEffect(() => {
            console.log("mounted!")
            getposts();
            return() => {
                console.log("unmounted!");
            }
        },[posts]);

but, this will create an infinite loop as whenever posts value gets updated it re-renders the page and mounting is done which call getPosts and this function simply updates the value in posts state, which again get updated and re-renders the page and goes on.

To solve this problem, we will use conditionals as:

10.     useEffect(() => {

            console.log("mounted!")
            if(!posts) getposts();
            return() => {
                console.log("unmounted!");
            }

        },[posts]);

        problem fixed!

Now, what is above funtion doing?

    it simply at first when we open the about page, it mounts the whole page, and runs useEffect now as useEffect ran it will check if there is any value in posts or not, if not, it will call getPosts() function which will update posts state value, now as we have written in square brackets name of state posts, therefore it will get enabled as posts value is changed due to getPosts() function, and re-render the page, which will first unmount whole page, then again mount whole page:
    Hence the process goes like : 

    mounted!
    unmounted!
    mounted!

11. Now, we can also give a alert at the time of unmounting to user, that if he wants to leave the page? as : 

    useEffect(() => {
        console.log('mounted')
        if(!posts) getPosts();
        return () => {
            alert('do you want to leave this page')
            console.log('unmounted');
        }
    },[posts]);