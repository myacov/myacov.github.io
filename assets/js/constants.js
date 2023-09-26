const Constants = {
    EMAIL: 'm.yacov@gmail.com',
    PHONE: '(+972) 054-4318584',
    LINKEDIN_URL: 'https://www.linkedin.com/in/yacov-medina/',
    GITHUB_URL: 'https://github.com/myacov/'
};

document.getElementById('email-address').textContent = Constants.EMAIL; 
document.getElementById('phone-number').textContent = Constants.PHONE;
document.getElementById('linkedin').href = Constants.LINKEDIN_URL;
document.getElementById('github').href = Constants.GITHUB_URL;
