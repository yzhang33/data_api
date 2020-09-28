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
I love Rita have a function called pos() which returns an array of parts of speech tags. Accessing data and processing data is fun. I also remembered that I collected some interesting data since Dan showed us pose net last class. I collected live video pose data using python and [OpenPose](https://github.com/CMU-Perceptual-Computing-Lab/openpose) and saved the [data](https://docs.google.com/document/d/13RYB7uqj7xlNPEMxRFhkXHAh2YY8W42LHKeggZBE6gw/edit?usp=sharing) as JSON. So this file contains all the pose data for each person that appeared in each frame. Collecting data using open pose is more involved and I wrote my data collection script from scratch. I would include my name in the "data biograph" as collector and where and when this data was collected. Ofcuse for the joke api the author and mainters's name is in their github page. 

### data privacy
If you want to know a person, you will start with his or her daily life. What kind of things he/she is doing everyday, what kind of food he/she eats, or what type of music he/she listens to. In 2020, it is so simple to know a person. All the social media exposed our information and the YouTube watch list revealed our personality and taste. All our online actions are monitored and these data are worth so much more than their product itself. We have been exposed to technologies. Most of us have touch screen phones and computers. We tend to use them every day and we are addicted to them. With tech companies’ algorithms and our data, they can predict a very accurate model of ourselves. What videos we like, what food we eat, and what type of music we listen to. Many top-notched computer scientists are doing this. I believe their algorithms are very accurate and fair. The government must have used these data either for security or other reasons. I have no control over my data and I feel helpless as if I am naked in the public. I could not imagine what would happen if my data were hacked. 
