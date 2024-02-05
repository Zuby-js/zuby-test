const { performance } = require('perf_hooks');
const { execSync } = require('child_process');

for(let i = 0; i < 10; i++) {
    const startTime = performance.now();
    execSync('npx zuby build');
    const endTime = performance.now();
    const duration = endTime - startTime;
    console.log(duration);
}