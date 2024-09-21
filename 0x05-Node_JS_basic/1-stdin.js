console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('readable', () => {
  const z = process.stdin.read();
  if (z) {
    process.stdout.write(`your name is: ${z}`);
  }
});
process.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
