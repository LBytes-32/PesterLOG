import PageManager from './Tools/PageManager'
import WelcomePage from './UI/Pages/Welcome/Welcome'

new PageManager({
    'Welcome': new WelcomePage()
}, 'Welcome')