var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'master',
        repo: 'https://github.com/jcsepulvedar/jcsepulvedar.github.io.git', // Update to point to your repository  
        user: {
            name: 'Juan Sepulveda', // update to use your name
            email: 'juansepulveda.restrepo@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)