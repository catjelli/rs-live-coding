

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