// @public/scripts/Welcome.js
'use strict';

Test();
function Test() {
    var config = {
        env: {
            COMPANY_NAME: 'Edgar Guzman'
        }
    };
    console.log('\n');
    console.log('Welcome to '.concat(config.env.COMPANY_NAME, ' Co.'));
    console.log('\n');
}
