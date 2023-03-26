// @public/scripts/Welcome.ts

Test();

export function Test() {
    const config = {
        env: {
            COMPANY_NAME: 'Edgar Guzman'
        }
    };

    console.log('\n');
    console.log(`Welcome to ${config.env.COMPANY_NAME} Co.`);
    console.log('\n');
}
