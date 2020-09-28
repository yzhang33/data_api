## Joke API

access githubpage by this url: [yzhang33.github.io/data_api](https://yzhang33.github.io/data_api/)

For this assignment, I am loading data from a joke [API](https://official-joke-api.appspot.com/jokes/general/ten) in GitHub. 
I can specify what kind of jokes I want and how many jokes it returns in the JSON file. I am using React for my pages and deployed them in Github pages. Unfortunately, I forgot most React skills such as hooks and props lol. After I recalled all the react knowledge using google. I start to processing jokes using react. 

### processing text
After I read all the joke data. I passed jokes' setup and punchlines to a joke class that parsing texts from the JSON file I read.
Then it will display jokes and Rita text parsed.

I tried some functions in rita such as addWord(), pos(), generateSentence(), and RiMarkov().
It generates interesting text results. The one displayed is the classical javascript method slice().
I sliced the punchline sentence from 0 to 6 and getting a new text.

### Thoughts
Rita does have some ability to processing words and sentences but I think its RiMarkov class has some bug. It generates the same sentences when I pass my punchline.
I love Rita have a function called pos() which returns an array of parts of speech tags. Accessing data and processing data is fun. I also remembered that I collected some interesting data since Dan showed us pose net last class. I collected live video pose data using python and [OpenPose](https://github.com/CMU-Perceptual-Computing-Lab/openpose) and saved the [data](https://docs.google.com/document/d/13RYB7uqj7xlNPEMxRFhkXHAh2YY8W42LHKeggZBE6gw/edit?usp=sharing) as JSON. So this file contains all the pose data for each person that appeared in each frame. Collecting data using open pose is more involved and I wrote my data collection script from scratch. Working with text data has the possibilities that I can generate new text from existing one.
