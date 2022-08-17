

 const paragraph = document.querySelector('p');
  paragraph.innerHTML = paragraph.innerText.replace(/[?]/g, '🤔');
 paragraph.innerHTML = paragraph.innerText.replace(/[!]/g, '😲');

    const preg = document.querySelector('p');
preg.innerHTML = preg.innerText.
split(' ').map(word => word.length > 6 ? `<span style="background:yellow">${word}</span>` : word).join(' ');
    
const wordCount = paragraph.innerText.split('').length;
const wordCountElem = document.createElement('div');
wordCountElem.innerText = `${wordCount} words`;
document.body.insertBefore(wordCountElem, paragraph);