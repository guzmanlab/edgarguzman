Test();

export function Test() {
    const config = {
        env: {
            COMPANY_LOGO: 'Edgar Guzman',
        },
    };

    console.log('\n');
    console.log(`Welcome to ${config.env.COMPANY_LOGO} Co.`);
    console.log('\n');
}
