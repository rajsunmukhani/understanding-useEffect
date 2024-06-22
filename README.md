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


12. Now, we will make the use of another API for practice of useEffect in Home.jsx.
    at first makea function named getImages() as:

        const getImages = async () => {
            try {
            const {data} =  await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`)
            console.log(data);
            } catch (error) {
            console.log(error);
            }
        }

13. Now check if the function is working properly, for that we have to make the call of the function, now we want to call the funtion at the time of mounting therefore, simply write the boilerplate of useEffect first as :

    *useEffect(() => {},[])*


14. Now inside this useEffect make a call to getImages function as :

    useEffect(() => {
        getImages();
    },[])

    Hence now the function will get the called and print the data on console.

15. Now make a useState named images and inside getImages function replace 
console.log(data) with setImages(data) as :

        a. const [images,setImages] = useState([]);
        b. update get images function as:
            const getImages = async () => {
                try {
                    const {data} =  await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`)
                    setImages(data);
                } catch (error) {
                    console.log(error);
                }
            }

16. Also, for further making pagination effect simply make a useState named page as:
        *const [page,setPage] = useState(1);*

        Now, in the link written under axios under getImages function, make the page no. dynamic as update the link from 
            *"https://picsum.photos/v2/list?page=1&limit=10"*
        to,
            *`https://picsum.photos/v2/list?page=${page}&limit=10`*

17. Now, apply a condtion on return of views section as: if images.length > 0 then return *map of images array and return each image with author name*, otherwise return *loading...*
coded as :

    return  images.length > 0 ? (
    <div>
      <div className='flex flex-wrap gap-2 mt-10 justify-center'>
          {images.map((image)=>(
            <div key={image.id} className='w-[25%] h-[15%]'>
              <img className='w-full h-full' src={image.download_url} alt="" />
              <h1>{image.author}</h1>
            </div>
          ))}
      </div>
    </div>

  ): (<div className='mt-10 text-center text-3xl text-red-500 font-bold'>Loading...</div>)

18. Now, we will make a pagination effect, for that first we will simply make a div, which will help in changing the page and display page number at the bottom of the page as:

    <div className='flex justify-center align-center gap-3 mt-5 mb-5'>
        <span>Prev</span>
        <span>{page}</span>
        <span>Next</span>
      </div>
    </div>

19. Now apply css to it as :

    <div className='flex justify-center align-center gap-3 mt-5 mb-5'>
        <span className='cursor-pointer hover:text-blue-500'>Prev</span>
        <span>{page}</span>
        <span className='cursor-pointer hover:text-blue-500'>Next</span>
      </div>
    </div>

20. Now, apply onClick attribute to change the page, as:

    <div className='flex justify-center align-center gap-3 mt-5 mb-5'>
        <span onClick={()=> setPage(page-1)} className='cursor-pointer hover:text-blue-500'>Prev</span>
        <span>{page}</span>
        <span onClick={()=>setPage(page+1)} className='cursor-pointer hover:text-blue-500'>Next</span>
      </div>
    </div>

21. Now, to avoid page number getting in minus count or getting below 0, simply update the function of Prev button as follows:
    
        *<span onClick={()=> page > 1 && setPage(page-1)} className='cursor-pointer hover:text-blue-500'>Prev</span>*

    This, will make sure that both the conditions has to be true, as if page > 1, change the pageNumber otherwise nothing will take place.


22. Now, here we want that as we change page number the data also gets updated, for that simply go in useEffect and at the place of updation component i.e. square brackets pass *page* as :

    useEffect(()=>{
        getImages();
    },[page]);

Now, we will see that on update of pagenumber pictures will also get updated.
    