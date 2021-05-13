// console.log('Hello World')

const BASE_URL = `http://localhost:3000/api/v1`

const Question = {
    //short for for writing methods with a =n object
    index(){
        //long form would have been index: () => {}
        return fetch(`${BASE_URL}/questions`)
        //by default fetch is a GET request
        //we know the path because we built the backend
        //but if we are using external API's, it it the
        //developer of the API's responsibility to share the path with its users

        //fetch will always return a promise, and promise will
        //always return a response object, and the response object
        //just represents the response.  We want the data of the actual response
        .then(res => {
            console.log(res);
            return res.json();
            //normally we want it in some sort of text format, but now we want it in json
            //res object has a method .json() that will parse the body of res into json format
        })
    },

    create(params){
        return fetch(`${BASE_URL}/questions`, {
            method: 'POST',
            credentials: 'include', //need this for cookies
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then((res) => res.json());
    }
}

//Sign In AJAX helper
const Session = {
    create(params){
        return fetch(`${BASE_URL}/session`, {
          method: 'POST',
          credentials: 'include', //need this for cookies to be allowed to be sent cross-origin
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(params)  
        }).then(res => res.json())
    }
}

//Hacky Sign-in/ "Mock" sign in
Session.create({
    email: 'js@winterfell.gov',
    password: 'supersecret'
})


Question.index()
    .then(questions => {
        //declare a container for the list of questions
        const questionsContainer = document.querySelector('.question-list');
        //iterate through each question and each question will return a string list item
        questionsContainer.innerHTML = questions.map(q => {
            return `
            <li>
                ${q.id} - ${q.title}
            </li>
            `
        }).join('');
})

const newQuestionForm = document.querySelector('#new-question-form');
newQuestionForm.addEventListener('submit', (event) =>{
    //remember that submit has some default behaviours we want to prevent
    event.preventDefault();
    //grab form DOM node
    const form = event.currentTarget
    //grab all the data from the form
    const formData = new FormData(form);
    const newQuestionParams = {
        title: formData.get('title'),
        body: formData.get('body')
    }
    Question.create(newQuestionParams)
    .then(data => {
        console.log(data)
    })
})

