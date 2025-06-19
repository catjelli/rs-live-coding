import { Article } from "./js/Article.js";

const data = [
    {
        id: 1,
        title: 'Increasing Prosperity With Positive Thinking',
        urlToImage: 'assets/images/strategies-1.jpg',
        tags: ['Art', 'Design'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2020'
    },
    {
        id: 2,
        title: 'Motivation Is The First Step To Success',
        urlToImage: 'assets/images/strategies-2.jpg',
        tags: ['Culture'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2020'
    },
    {
        id: 3,
        title: 'Success Steps For Your Personal Or Business Life',
        urlToImage: 'assets/images/strategies-3.jpg',
        tags: ['Culture', 'Design', 'Art'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2020'
    }
    // {
    //     id: 4,
    //     title: 'Success Steps For Your Personal Or Business Life Plus Funny Image on the Back',
    //     urlToImage: 'assets/images/strategies-4.jpg',
    //     tags: ['Culture', 'Design', 'Art'],
    //     content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
    //     date: '01.01.2020'
    // },
    // {
    //     id: 5,
    //     title: 'Increasing Prosperity With Positive Thinking',
    //     urlToImage: 'assets/images/strategies-5.jpg',
    //     tags: ['Design'],
    //     content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
    //     date: '01.01.2020'
    // },
    // {
    //     id: 6,
    //     title: 'Increasing Prosperity With Positive Thinking',
    //     urlToImage: 'assets/images/strategies-1.jpg',
    //     tags: ['Art', 'Design'],
    //     content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
    //     date: '01.01.2020'
    // },
    // {
    //     id: 7,
    //     title: 'Motivation Is The First Step To Success',
    //     urlToImage: 'assets/images/strategies-2.jpg',
    //     tags: ['Culture'],
    //     content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
    //     date: '01.01.2020'
    // },
    // {
    //     id: 8,
    //     title: 'Success Steps For Your Personal Or Business Life',
    //     urlToImage: 'assets/images/strategies-3.jpg',
    //     tags: ['Culture', 'Design', 'Art'],
    //     content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
    //     date: '01.01.2020'
    // }
]

window.onload = function() {
    console.log("Hello");

    //Tags
    addTagsClickHandler();
}

const addTagsClickHandler = () => {
    document.querySelector('.strategies__tags').addEventListener('click', (e) => {
        if (e.target.classList.contains('tag')) {
            let clickedTag = e.target;
            removeSelectedTags();
            selectClickedTag(clickedTag);
            if (clickedTag.innerText === 'All') {
                showAllStrategies();
            } else {
                filterStrategyBySelectedTag(clickedTag.innerText);
            }
        }
    })
}

const removeSelectedTags = () => {
    let tags = document.querySelectorAll('.strategies__tags .tag');
    // console.log(tags);
    tags.forEach(tag => {
        tag.classList.remove('tag--selected');
        tag.classList.add('tag--filter');
    })
}

const selectClickedTag = (clickedTag) => {
    clickedTag.classList.add('tag--selected');
    clickedTag.classList.remove('tag--filter');
}

const showAllStrategies = () => {
    let strategies = document.querySelectorAll('.strategies__layout .strategy');
    strategies.forEach(strategy => {
        strategy.classList.remove('strategy--hidden');
    })
}

const filterStrategyBySelectedTag = (selectedTag) => {
    let strategies = document.querySelectorAll('.strategies__layout .strategy');
    strategies.forEach(strategy => {
        strategy.classList.add('strategy--hidden');
        strategy.querySelectorAll('.tag').forEach(tag => {
            if (tag.innerText === selectedTag) {
                strategy.classList.remove('strategy--hidden');
            }
        })
    })
}