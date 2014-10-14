# Angular Express Bootstrap SB Admin Seed

Forked from [btford/angular-express-seed](https://github.com/btford/angular-express-seed) and featuring [Iron Summit Media Strategies - Start Bootstrap](https://github.com/IronSummitMedia/startbootstrap/tree/gh-pages/templates/sb-admin-2), inspired by [jimakker/angular-express-bootstrap-seed](https://github.com/jimakker/angular-express-bootstrap-seed/)

Start an awesome app with AngularJS on the front, Express + Node on the back. This project is an
application skeleton for a typical [AngularJS](http://angularjs.org/) web app for those who want
to use Node to serve their app.

The seed contains angular libraries, test libraries and a bunch of scripts all preconfigured for
instant web development gratification. Just clone the repo (or download the zip/tarball) and
you're ready to develop your application.

The seed app shows how to wire together Angular client-side components with Express on the server.
It also illustrates writing angular partials/views with the Jade templating library.

_Note: Although Jade supports interpolation, you should be doing that mostly on the client. Mixing
server and browser templating will convolute your app. Instead, use Jade as a syntactic sugar for
HTML, and let AngularJS take care of interpolation on the browser side._

## How to use angular-express-bootstrap-sb-admin-seed

Clone the angular-express-bootstrap-sb-admin-seed repository, run `npm install` to grab the dependencies, and start hacking!

### Running the app

Runs like a typical express app:

    node app.js

### Running tests

Coming soon!

### Receiving updates from upstream

Just fetch the changes and merge them into your project with git.


## Directory Layout
    
    app.js              --> app config
    package.json        --> for npm
    public/             --> all of the files to be used in on the client side
      css/              --> css files
        app.css         --> default stylesheet
      img/              --> image files
      js/               --> javascript files
        app.js          --> declare top-level app module
        controllers.js  --> application controllers
        directives.js   --> custom angular directives
        filters.js      --> custom angular filters
        services.js     --> custom angular services
        lib/            --> angular and 3rd party JavaScript libraries
          angular/
            angular.js            --> the latest angular js
            angular.min.js        --> the latest minified angular js
            angular-*.js          --> angular add-on modules
            version.txt           --> version number
		  jquery/
		    jquery-*.min.js		  --> the latest jquery min
	  sb-admin-2/				  --> SB Admin 2 resource files, including bootstrap
		...
    routes/
      api.js            --> route for serving JSON
      index.js          --> route for serving HTML pages and partials
    views/
      index.jade        --> main page for app
      layout.jade       --> doctype, title, head boilerplate
	  navigation.jade   --> top and side navigation bars
      partials/         --> angular view partials (partial jade templates)
		blank.jade	
		buttons.jade	
		dashboard.jade	
		flot.jade	
		forms.jade	
		grid.jade	
		login.jade	
		morris.jade	
		notifications.jade	
		panels-wells.jade	
		tables.jade	
		typography.jade



## Example App

A simple [blog](https://github.com/btford/angular-express-blog) based on this seed.


## Contact

For more information on AngularJS please check out http://angularjs.org/
For more on Express and Jade, http://expressjs.com/ and http://jade-lang.com/ are
your friends.
For more information on the SB Admin Bootstrap Theme please check out http://startbootstrap.com/template-overviews/sb-admin-2/

## License
MIT
