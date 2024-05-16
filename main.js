//Array collection of the icons address..
const socialAccounts = [
    'images/icon-facebook.svg',
    'images/icon-twitter.svg',
    'images/icon-pinterest.svg'
]


//Creating the Ui Component that will be displayed after clickin the share button..

//Creating the floating container first..
function floatingSocial() {
    const floatingContainer = document.createElement('div');
    floatingContainer.classList.add('card-floating', 'hidden');

    const para = document.createElement('p');
    para.className = 'social-header';
    para.innerHTML = 'share';
    const shareGroup = generateIcons();
    floatingContainer.appendChild(para);
    floatingContainer.appendChild(shareGroup);

    return floatingContainer;
    
}

//Creating the social media icons container...
function generateIcons() {
    const iconsContainer = document.createElement('ul');
    socialAccounts.map(account => {
        const element = document.createElement('li');
        const link = document.createElement('a');
        link.href = '#';
        const icon = document.createElement('img');
        icon.src = account;
        link.appendChild(icon);
        element.appendChild(link);
        iconsContainer.appendChild(element);
    })
    return iconsContainer;
}



//UI elements that I will interact with...
const card = document.querySelector('.card');
const popup = floatingSocial();
card.appendChild(popup)

// adding interaction to the button
const ShareBtn = document.querySelector('.share-btn');

ShareBtn.addEventListener('click', (event) => {
    popup.classList.toggle('hidden');
    ShareBtn.classList.toggle('active'); // TO show that the button has been clicked...
})



// console.log(floatingSocial());
