# NWT Image Browser
## The project
NWT Image Browser uses API provided by NWT Data Provider to let user browse images from Giphy and Pixabay. It has list and search function. 
As user you are able to type phrase you want to search for and App will return the content you are looking for.
## Struggles
* webpack config - well this is quite tough part. It was my first time creating very own webpack configuration. I have skipped production configuration to save some time.
* Unit Tests - I know how important it is but due to lack of time I decided to skip most of tests that requires mocking API, etc.
* Vuex - I have added store because `@emit`, especially in nested components is very unreadable for me. Also I like the freedom Vuex gives ;)
## Bibliography
During development I have encountered many struggles. Those articles helped me a lot to solve my problems and answer many important questions.
* https://www.freecodecamp.org/news/how-to-create-a-vue-js-app-using-single-file-components-without-the-cli-7e73e5b8244f/
* https://medium.com/js-dojo/how-to-configure-webpack-4-with-vuejs-a-complete-guide-209e943c4772
* https://blog.snap.hr/01/11/2018/vue-api-calls-smart-way/ - and this require some notes. I am using this approach in my personal 
or job projects but I simplified it a lot here, because app was to small for whole repositories and factories stuff.
 
I have also checked some git repositories with example projects to make sure my ideas are correct.
* https://github.com/samteb/vue-2-webpack-4-boilerplate

I also read docs from libs I used in project
