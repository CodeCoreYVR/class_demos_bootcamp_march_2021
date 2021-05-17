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
    },
    one(id) {
      return fetch(`${BASE_URL}/questions/${id}`)
        .then(res => res.json())
    },
    update(id, params) {
      return fetch(`${BASE_URL}/questions/${id}`, {
        method: 'PATCH',
        credentials: 'include',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(params)
      }).then(res => res.json())
    },
    destroy(id) {
      return fetch(`${BASE_URL}/questions/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      })
    },
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

function navigateTo(id) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active')
  })

  document.querySelector(`.page#${id}`).classList.add('active')
  
  document.querySelectorAll('a.item').forEach(page => {
    page.classList.remove('active')
  })

  const navLink = document.querySelector(`a[data-target=${id}]`)
  if (navLink) navLink.classList.add('active')
}

const navbar = document.querySelector('.menu.navbar')

navbar.addEventListener('click', event => {
  const navLink = event.target.closest('a')

  if (navLink) {
    event.preventDefault()
    const pageId = navLink.dataset.target
    navigateTo(pageId)
  }
})

const questionsContainer = document.querySelector('.question-list');

function loadQuestions() {
  Question.index()
      .then(questions => {
          //declare a container for the list of questions
          //iterate through each question and each question will return a string list item
          questionsContainer.innerHTML = questions.map(q => {
              return `
              <li>
                <a class="question-link" data-id="${q.id}" href="#">
                  ${q.id} - ${q.title}
                </a>
              </li>
              `
          }).join('');
  })
}

function renderQuestionShow(id) {
  Question
    .one(id)
    .then(({ id, title, body, author, like_count }) => {
      questionShowPage.innerHTML = `
        <h2>${title}</h2>
        <p>${body}</p>
        <small>Authored by: ${author.full_name}</small><br>
        <small>${like_count} likes</small>
        <div>
          <button data-action="edit" data-id="${id}" href="#">Edit</button>
          <button data-action="delete" data-id="${id}" href="#">Delete</button>
        </div>
      `
      navigateTo('question-show')
    })
}

loadQuestions()

const questionShowPage = document.querySelector('#question-show')

questionsContainer.addEventListener('click', event => {
  event.preventDefault()
  if (event.target.matches('a.question-link')) {
    const questionId = event.target.dataset.id
    renderQuestionShow(questionId)
  }
})

questionShowPage.addEventListener('click', event => {
  event.preventDefault()
  const { dataset } = event.target
  const questionId = dataset.id
  const action = dataset.action

  if (action === 'edit') {
    Question.one(questionId).then(({ id, title, body }) => {
      // populate the edit question form
      document.querySelector('#edit-question-form input[name=title]').value = title
      document.querySelector('#edit-question-form textarea[name=body]').value = body
      document.querySelector('#edit-question-form input[name=id]').value = id
      navigateTo('question-edit')
    })
  }

  if (action === 'delete') {
    Question
      .destroy(questionId)
      .then(() => {
        loadQuestions()
        navigateTo('question-index')
      })
  }
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
    .then(({ id }) => {
        loadQuestions()
        renderQuestionShow(id)
        navigateTo('question-show')
    })
})

const editQuestionForm = document.querySelector('#edit-question-form');
editQuestionForm.addEventListener('submit', (event) =>{
    event.preventDefault();

    const form = event.currentTarget
    const formData = new FormData(form);
    const questionParams = {
        title: formData.get('title'),
        body: formData.get('body')
    }
    Question.update(formData.get('id'), questionParams)
    .then(({ id }) => {
        loadQuestions()
        renderQuestionShow(id)
        navigateTo('question-show')
    })
})

















