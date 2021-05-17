// Single Page Application

// When you using fetch, you are only able to make
// requests to your sites domain unless another site
// gives your requests permission. This is a security
// implemented in Browser and is not applicable anywhere.

// To allow CORS in Rails, you need to do the following:
// 1. Add the "rack-cors" gem
// 2. Configure it in `config/intializers/cors.rb`
// 3. See related Rails commit

// To setup a simple HTTP server to serve a directory as static
// assets, do the following:
// 1. Install `http-server` package globally: `npm i -g http-server`
// 2. Run the command in your project `http-server -p 3030 .`

// There are several conditions that must be met to share
// cookies with AJAX across domains:
// 1. Your website must be served by server.
// 2. You must add the option `credentials: "include"`
//    to your `fetch` calls.
// 3. The server must only allow your specific
//    as opposed to all domains with `*`.
// 4. The server must be set to allow credentials sharing
//    for that CORS resource.
// (See Rails commit for 3 & 4)

// async/await is alternative way to handle promises. 
// It's syntax sugar for the .then() API. We can only use 
// "await" inside of an "async" function. Using "await"
// in front of a asynchronous function call will pause the
// function until the async operation has completed.

const BASE_URL = `http://localhost:3000/api/v1`

const Question = {
  async index(){
    const res = await fetch(`${BASE_URL}/questions`)
    return await res.json()
  },
  async create(params) {
    const res = await fetch(`${BASE_URL}/questions`, {
      method: 'POST',
      credentials: 'include', 
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })

    return await res.json()
  },
  async one(id) {
    const res = await fetch(`${BASE_URL}/questions/${id}`)
    return await res.json()
  },
  async update(id, params) {
    const res = await fetch(`${BASE_URL}/questions/${id}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(params)
    })
    return await res.json()
  },
  destroy(id) {
    return fetch(`${BASE_URL}/questions/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    })
  },
}

const Session = {
  async create(params){
    const res = await fetch(`${BASE_URL}/session`, {
      method: 'POST',
      credentials: 'include', 
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)  
    })
    return await res.json()
  }
}

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

async function loadQuestions() {
  const questions = await Question.index()

  questionsContainer.innerHTML = questions.map(q => {
    return `
      <li>
        <a class="question-link" data-id="${q.id}" href="#">
          ${q.id} - ${q.title}
        </a>
      </li>
    `
  }).join('')
}

async function renderQuestionShow(id) {
  const  = await Question.one(id) { id, title, body, author, like_count }

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
    
    event.preventDefault();
    
    const form = event.currentTarget
    
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
