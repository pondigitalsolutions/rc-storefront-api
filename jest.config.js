module.exports = {
    transform: {
        '^.+\\.(ts)$': 'ts-jest'
    },
    collectCoverage: true,
    coverageDirectory: './coverage/',
    collectCoverageFrom: [
        'src/**/*.{js,ts}',
    ],
    testMatch: ['**/__tests__/**/*spec.[tj]s?(x)'],
    setupFilesAfterEnv: ['./__tests__/setup.ts']
};
