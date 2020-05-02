
require( 'dotenv' ).config()

const sgMail = require( '@sendgrid/mail' );
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const express = require( 'express' );
const path = require( 'path' );

const app = express();
const PORT = process.env.PORT || 3001;

const compression = require( 'compression' );
app.use( compression() );

const enforce = require('express-sslify');
app.use(enforce.HTTPS());

// Define middleware here
app.use( express.urlencoded({ extended: true }) );
app.use( express.json() );

// Serve up static assets (usually on heroku)
if ( process.env.NODE_ENV === 'production' ) {
    app.use( express.static( '../client/build' ) );
}

app.post( '/api/contact', function( req, res ) {

    console.log( req.body );

    if( 
        req.body.message 
        && 
        req.body.name
        &&
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test( req.body.email )
    ) {

        const msg = {
            to: 'dbennettmiami@gmail.com',
            from: 'david.bennett@ncf.edu',
            subject: `-<[ New contact from dbennett.io ]>-`,
            text: `Sender: ${ req.body.name } (${ req.body.email }) \n\nMessage: ${ req.body.message }`
        };
        
        sgMail.send( 
            msg, 
            (err, info) => { 
                if( err ) {
                    console.error( err.response.body.errors ); 
                    return false;
                } else {
                    res.json( info );
                }
            }
        );

    }

});

// If no API routes are hit, send the React app
app.use( function( req, res ) {
    res.sendFile( path.join( __dirname, "../client/build/index.html" ) );
});

// Start the API server
app.listen(PORT, function() {
    console.log( `🌎 => API Server now listening on PORT ${PORT}!` );
});