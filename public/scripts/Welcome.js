Test();
function Test() {
    var config = {
        env: {
            COMPANY_LOGO: 'Edgar Guzman',
        },
    };
    console.log('\n');
    console.log('Welcome to '.concat(config.env.COMPANY_LOGO, ' Co.'));
    console.log('\n');
}
