module.exports = function () {
    return {
        files: [
            {pattern:'public/tests/lib/jquery-2.1.4.js', instrument: false},
            {pattern:'public/tests/SpecHelper.js', instrument: false},
            {pattern:'public/app.js'}
        ],

        tests: [
            {pattern: 'public/tests/**/*_spec.js'}
        ],

        testFramework: 'jasmine'

    };
};

