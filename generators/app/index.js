var Generator = require("yeoman-generator");

var chalk = require('chalk');

module.exports = class extends Generator{

    welcome() {
        this.log( chalk.bold.green( 'Welcome to the Web Design Generator!' ) );

        this.log( ' ' ) 
    }

    
    writing(){

            this.log( chalk.bold.cyan( 'Creating the file structure' ) )

            this.fs.copy( 
                this.templatePath( 'css/style.css' ),
                this.destinationPath( 'css/style.css') 
            );

    async prompting() {
        const answers = await this.prompt([
        {
            type: 'list',
            name: 'name',
            choices: ['scss', 'css'],
            message: 'what stylesheet are you using?'

        }])

        if( answers.name === 'scss'){
            this.fs.copy( 
                this.templatePath( 'scss/custom.scss' ),
                this.destinationPath( 'scss/custom.scss') )

            this.fs.copy(
                this.templatePath('html/'),
                this.destinationPath('html/')
            );

            this.fs.copy(
                this.templatePath('js/'),
                this.destinationPath('js/')
            );

            this.fs.copy(
             this.fs.copy(
                this.templatePath('images/'),
                this.destinationPath('images/')
            );

            this.fs.copy(
                this.templatePath('package.json'),
                this.destinationPath('package.json')
            );

            this.log(' ')

        }


    end() {
        this.log( chalk.bold.green( 'Generated all the files.. All the best in your website development' ) )
        this.log( 'Type `npm run dev` to run the development server on your localhost' )
        this.log( 'Web Design Template | TheCoderGuru' )

        }


    }

    writing(){

        this.log( chalk.bold.yellow( 'Created the file structure' ) )

        this.log(' ')

           this.fs.copy( 
                this.templatePath( 'css/style.css ),
                this.destinationPath( 'css/style.css') )

            this.fs.copy(
                this.templatePath('html/'),
                this.destinationPath('html/')
            );

            this.fs.copy(
                this.templatePath('html/'),
                this.destinationPath('html/')
            );

            this.fs.copy(
                this.templatePath('js/'),
                this.destinationPath('js/')
            );

             this.fs.copy(
                this.templatePath('images/'),
                this.destinationPath('images/')
            );
    }

    end() {
        this.log( chalk.bold.green( 'Generated all the files.. All the best in your website development' ) )
        this.log( ' ' )
        this.log( 'Web Design Template | TheCoderGuru' )
    }
    
    writing(){
        
        this.log( chalk.bold.yellow( 'Creating the project files ...' ) )

        this.log(' ')

            this.fs.copy(
            this.templatePath('index.html'),
            this.destinationPath('index.html')
        );
        this.fs.copy(
            this.templatePath('css/style.css'),
            this.destinationPath('css/style.css')
        );
    }

            end() {
            this.log( chalk.bold.green( 'Generated all the files.. All the best in your website development' ) )
            this.log( ' ' )
            this.log( 'Web Design Template | TheCoderGuru' )

        }

    }
}
