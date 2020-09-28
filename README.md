## Joke API

access webpage by this url: [yzhang33.github.io/data_api](yzhang33.github.io/data_api)

For this Assignment I am loading data from a joke [API](https://official-joke-api.appspot.com/jokes/general/ten) in github using this link. 
I can specify what kind of jokes I want and how many jokes I get. I am using React for my pages and deployed them in github pages.

### processing text
After I reads all the joke data. I passed jokes' setup and punchlines to a joke class which parsing texts from JSON file I read.
Then it will display jokes and rita text parsed.

I tried some functions in rita such as addWord(), pos(), generateSentence(), and RiMarkov().
It generates interesting text results. The one displayed is classical javascript method slice().
I sliced the punchline sentence from 0 to 6 and getting a new text.

### Thoughts
Rita does have some ability to processing words and sentences but I think its RiMarkov class has some bug. It generates the same sentences when I pass my punchline.
I love Rita have a function called pos() which returns array of part of speech tags.
